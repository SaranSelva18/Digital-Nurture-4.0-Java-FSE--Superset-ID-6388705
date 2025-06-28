--Scenario 2: A customer can be promoted to VIP status based on their balance.
--Question: Write a PL/SQL block that iterates through all customers and sets a flag IsVIP to TRUE for those with a balance over $10,000.




ALTER TABLE Customers ADD IsVIP VARCHAR2(5);

Select * from Customers;

BEGIN
    FOR cust IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;
        ELSE
            UPDATE Customers
            SET IsVIP = 'FALSE'
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/
