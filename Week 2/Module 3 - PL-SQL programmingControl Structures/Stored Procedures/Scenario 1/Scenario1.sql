--Scenario 1: The bank needs to process monthly interest for all savings accounts.
--Question: Write a stored procedure ProcessMonthlyInterest that calculates and updates the balance of all savings accounts by applying an interest rate of 1% to the current balance.




CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    FOR acc IN (SELECT AccountID, Balance FROM Accounts WHERE AccountType = 'Savings') LOOP
        UPDATE Accounts
        SET Balance = Balance + (acc.Balance * 0.01),
            LastModified = SYSDATE
        WHERE AccountID = acc.AccountID;
    END LOOP;
    COMMIT;
END;
/
BEGIN
    ProcessMonthlyInterest;
END;
/
SELECT * FROM Accounts;