using System;

public class MVCTest {
    public static void Main(string[] args) {
        Student model = new Student {
            Name = "Utkarsh Raj",
            Id = "STU-1024",
            Grade = "B"
        };

        StudentView view = new StudentView();
        StudentController controller = new StudentController(model, view);

        controller.RenderView();

        Console.WriteLine("\nModifying student records through controller flow...");
        controller.UpdateStudentGrade("A+");
        controller.RenderView();
    }
}