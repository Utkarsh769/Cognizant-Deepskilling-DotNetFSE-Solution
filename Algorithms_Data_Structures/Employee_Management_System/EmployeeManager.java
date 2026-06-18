public class EmployeeManager {
    private Employee[] employees;
    private int count;

    public EmployeeManager(int capacity) {
        employees = new Employee[capacity];
        count = 0;
    }

    public void addEmployee(Employee emp) {
        if (count >= employees.length) {
            System.out.println("Registry error: Array capacity full.");
            return;
        }
        employees[count] = emp;
        count++;
    }

    public Employee searchEmployee(String empId) {
        for (int i = 0; i < count; i++) {
            if (employees[i].getEmployeeId().equals(empId)) {
                return employees[i];
            }
        }
        return null;
    }

    public void traverseEmployees() {
        System.out.println("\n--- Traversing Employee Array ---");
        for (int i = 0; i < count; i++) {
            System.out.println(employees[i]);
        }
    }

    public void deleteEmployee(String empId) {
        int indexToDelete = -1;
        for (int i = 0; i < count; i++) {
            if (employees[i].getEmployeeId().equals(empId)) {
                indexToDelete = i;
                break;
            }
        }

        if (indexToDelete == -1) {
            System.out.println("Employee not found.");
            return;
        }
        for (int i = indexToDelete; i < count - 1; i++) {
            employees[i] = employees[i + 1];
        }
        employees[count - 1] = null; 
        count--;
        System.out.println("Deleted employee ID: " + empId);
    }
}