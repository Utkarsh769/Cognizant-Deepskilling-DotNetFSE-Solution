public class MVCTest {
    public static void main(String[] args) {
        Student model = new Student();
        model.setName("Utkarsh Raj");
        model.setId("STU-0179");
        model.setGrade("B");

        StudentView view = new StudentView();
        StudentController controller = new StudentController(model, view);
        controller.renderView();
        System.out.println("\nModifying student records through controller flow...");
        controller.updateStudentGrade("A+");
        controller.renderView();
    }
}
