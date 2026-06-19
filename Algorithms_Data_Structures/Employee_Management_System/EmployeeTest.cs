using System;

public class EmployeeTest {
    public static void Main(string[] args) {
        EmployeeManager manager = new EmployeeManager(5);

        manager.AddEmployee(new Employee("E101", "John", "Manager", 75000));
        manager.AddEmployee(new Employee("E102", "Sarah", "Developer", 68000));
        manager.AddEmployee(new Employee("E103", "Mike", "Designer", 55000));

        manager.TraverseEmployees();

        Console.WriteLine("\nSearching for E102:");
        Console.WriteLine(manager.SearchEmployee("E102"));

        Console.WriteLine();
        manager.DeleteEmployee("E102");
        manager.TraverseEmployees();
    }
}