public class StudentController {
    private Student model;
    private StudentView view;

    public StudentController(Student model, StudentView view) {
        this.model = model;
        this.view = view;
    }

    public void UpdateStudentName(string name) {
        model.Name = name;
    }

    public void UpdateStudentGrade(string grade) {
        model.Grade = grade;
    }

    public void RenderView() {
        view.DisplayStudentDetails(model.Name, model.Id, model.Grade);
    }
}
