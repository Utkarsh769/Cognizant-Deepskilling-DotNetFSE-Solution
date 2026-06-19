using System;

public class StudentView {
    public void DisplayStudentDetails(string studentName, string studentId, string studentGrade) {
        Console.WriteLine("=== STUDENT DETAILS SHEET ===");
        Console.WriteLine("ID: " + studentId);
        Console.WriteLine("Name: " + studentName);
        Console.WriteLine("Grade Result: " + studentGrade);
    }
}