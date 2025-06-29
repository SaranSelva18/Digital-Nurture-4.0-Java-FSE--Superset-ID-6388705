package com.eligibility;

public class ExamEligibilityChecker {
    public boolean isEligible(int attendancePercent, int internalMarks) {
        return attendancePercent >= 75 && internalMarks >= 40;
    }
}

