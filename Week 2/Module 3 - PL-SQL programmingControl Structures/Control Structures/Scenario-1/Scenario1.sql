--Scenario 1: The bank wants to apply a discount to loan interest rates for customers above 60 years old.
--Question: Write a PL/SQL block that loops through all customers, checks their age, and if they are above 60, apply a 1% discount to their current loan interest rates.




BEGIN
    FOR cust IN (SELECT CustomerID, DOB FROM Customers) LOOP
        IF TRUNC(MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12) > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/
