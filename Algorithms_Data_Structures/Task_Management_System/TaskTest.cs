using System;

public class TaskTest {
    public static void Main(string[] args) {
        TaskLinkedList pipeline = new TaskLinkedList();

        pipeline.AddTask(new Task("T1", "Database Backup", "Pending"));
        pipeline.AddTask(new Task("T2", "Code Review", "In-Progress"));
        pipeline.AddTask(new Task("T3", "UI Deployment", "Pending"));

        pipeline.TraverseTasks();

        Console.WriteLine("\nSearching for T2:");
        Console.WriteLine(pipeline.SearchTask("T2"));

        Console.WriteLine();
        pipeline.DeleteTask("T2");
        pipeline.TraverseTasks();
    }
}