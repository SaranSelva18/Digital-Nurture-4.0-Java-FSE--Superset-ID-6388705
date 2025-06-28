--Scenario 3: Customers should be able to transfer funds between their accounts.
--Question: Write a stored procedure TransferFunds that transfers a specified amount from one account to another, checking that the source account has sufficient balance before making the transfer.


CREATE SEQUENCE SEQ_TRANS_ID
START WITH 1001
INCREMENT BY 1
NOCACHE
NOCYCLE;

CREATE OR REPLACE PROCEDURE TransferFunds (
    fromAccount IN NUMBER,
    toAccount IN NUMBER,
    amount IN NUMBER
) AS
    v_balance NUMBER;
BEGIN
    -- Get balance of source account
    SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = fromAccount FOR UPDATE;

    IF v_balance < amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
    END IF;

    -- Deduct from source
    UPDATE Accounts
    SET Balance = Balance - amount,
        LastModified = SYSDATE
    WHERE AccountID = fromAccount;

    -- Add to destination
    UPDATE Accounts
    SET Balance = Balance + amount,
        LastModified = SYSDATE
    WHERE AccountID = toAccount;

    -- Record Transactions
    INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
    VALUES (SEQ_TRANS_ID.NEXTVAL, fromAccount, SYSDATE, amount, 'DEBIT');

    INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
    VALUES (SEQ_TRANS_ID.NEXTVAL, toAccount, SYSDATE, amount, 'CREDIT');

    COMMIT;
END;
/

BEGIN
    TransferFunds(201, 203, 1000);  -- transfer ₹1000 from Account 201 to 203
END;
/

SELECT * FROM Transactions;

SELECT * FROM Accounts;
    
