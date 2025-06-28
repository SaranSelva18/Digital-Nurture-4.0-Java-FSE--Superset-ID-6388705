--Scenario 2: The bank wants to implement a bonus scheme for employees based on their performance.
--Question: Write a stored procedure UpdateEmployeeBonus that updates the salary of employees in a given department by adding a bonus percentage passed as a parameter.



CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    deptName IN VARCHAR2,
    bonusPercent IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * bonusPercent / 100)
    WHERE Department = deptName;
    COMMIT;
END;
/
BEGIN
    UpdateEmployeeBonus('HR', 10);
END;
/
SELECT * FROM Employees;
