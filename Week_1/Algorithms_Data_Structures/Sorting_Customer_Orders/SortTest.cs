using System;

public class SortTest {
    public static void Main(string[] args) {
        Order[] batch1 = {
            new Order("O1", "Alice", 250.50),
            new Order("O2", "Bob", 45.00),
            new Order("O3", "Charlie", 600.00),
            new Order("O4", "David", 120.25)
        };

        Console.WriteLine("--- Running Bubble Sort Test ---");
        SortAlgorithms.BubbleSort(batch1);
        foreach (Order o in batch1) Console.WriteLine(o);

        Order[] batch2 = {
            new Order("O1", "Alice", 250.50),
            new Order("O2", "Bob", 45.00),
            new Order("O3", "Charlie", 600.00),
            new Order("O4", "David", 120.25)
        };

        Console.WriteLine("\n--- Running Quick Sort Test ---");
        SortAlgorithms.QuickSort(batch2, 0, batch2.Length - 1);
        foreach (Order o in batch2) Console.WriteLine(o);
    }
}