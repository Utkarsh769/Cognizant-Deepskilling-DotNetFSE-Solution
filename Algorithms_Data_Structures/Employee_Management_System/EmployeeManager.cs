using System;

public class EmployeeManager {
    private Employee[] employees;
    private int count;

    public EmployeeManager(int capacity) {
        employees = new Employee[capacity];
        count = 0;
    }

    public void AddEmployee(Employee emp) {
        if (count >= employees.Length) {
            Console.WriteLine("Registry error: Array capacity full.");
            return;
        }
        employees[count] = emp;
        count++;
    }

    public Employee SearchEmployee(string empId) {
        for (int i = 0; i < count; i++) {
            if (employees[i].GetEmployeeId() == empId) {
                return employees[i];
            }
        }
        return null;
    }

    public void TraverseEmployees() {
        Console.WriteLine("\n--- Traversing Employee Array ---");
        for (int i = 0; i < count; i++) {
            Console.WriteLine(employees[i]);
        }
    }

    public void DeleteEmployee(string empId) {
        int indexToDelete = -1;
        for (int i = 0; i < count; i++) {
            if (employees[i].GetEmployeeId() == empId) {
                indexToDelete = i;
                break;
            }
        }

        if (indexToDelete == -1) {
            Console.WriteLine("Employee not found.");
            return;
        }

        for (int i = indexToDelete; i < count - 1; i++) {
            employees[i] = employees[i + 1];
        }
        employees[count - 1] = null;
        count--;
        Console.WriteLine("Deleted employee ID: " + empId);
    }
}