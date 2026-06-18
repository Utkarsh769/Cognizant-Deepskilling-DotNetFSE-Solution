public class TaskTest {
    public static void main(String[] args) {
        TaskLinkedList pipeline = new TaskLinkedList();

        pipeline.addTask(new Task("T1", "Database Backup", "Pending"));
        pipeline.addTask(new Task("T2", "Code Review", "In-Progress"));
        pipeline.addTask(new Task("T3", "UI Deployment", "Pending"));

        pipeline.traverseTasks();

        System.out.println("\nSearching for T2:");
        System.out.println(pipeline.searchTask("T2"));

        System.out.println();
        pipeline.deleteTask("T2");
        pipeline.traverseTasks();
    }
}