public class Employee {
    private string employeeId;
    private string name;
    private string position;
    private double salary;

    public Employee(string employeeId, string name, string position, double salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    public string GetEmployeeId() { return employeeId; }
    public string GetName() { return name; }

    public override string ToString() {
        return $"ID: {employeeId} | Name: {name} | Position: {position} | Salary: ${salary}";
    }
}