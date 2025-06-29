package com.eligibility;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class ExamEligibilityCheckerTest {

    private ExamEligibilityChecker checker;

    @Before
    public void setUp() {
        System.out.println("Setting up eligibility checker...");
        checker = new ExamEligibilityChecker();
    }

    @After
    public void tearDown() {
        System.out.println("Clearing checker after test.");
        checker = null;
    }

    @Test
    public void testEligibleStudent() {
        // Arrange: setup done
        // Act
        boolean result = checker.isEligible(85, 45);
        // Assert
        assertTrue(result);
    }

    @Test
    public void testLowAttendance() {
        boolean result = checker.isEligible(60, 50);
        assertFalse(result);
    }

    @Test
    public void testLowInternalMarks() {
        boolean result = checker.isEligible(80, 30);
        assertFalse(result);
    }

    @Test
    public void testBorderlineCase() {
        boolean result = checker.isEligible(75, 40);
        assertTrue(result);
    }
}

