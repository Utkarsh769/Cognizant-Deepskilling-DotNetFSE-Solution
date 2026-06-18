public class EmployeeTest {
    public static void main(String[] args) {
        EmployeeManager manager = new EmployeeManager(5);

        manager.addEmployee(new Employee("E101", "John", "Manager", 75000));
        manager.addEmployee(new Employee("E102", "Sarah", "Developer", 68000));
        manager.addEmployee(new Employee("E103", "Mike", "Designer", 55000));

        manager.traverseEmployees();

        System.out.println("\nSearching for E102:");
        System.out.println(manager.searchEmployee("E102"));

        System.out.println();
        manager.deleteEmployee("E102");
        manager.traverseEmployees();
    }
}
