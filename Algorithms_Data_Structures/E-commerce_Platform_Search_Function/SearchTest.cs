using System;

public class SearchTest {
    public static void Main(string[] args) {
        Product[] items = {
            new Product("105", "Wireless Mouse", "Electronics"),
            new Product("101", "Mechanical Keyboard", "Electronics"),
            new Product("103", "Gaming Monitor", "Electronics"),
            new Product("102", "USB-C Cable", "Accessories")
        };

        Console.WriteLine("--- Linear Search Test ---");
        Product result1 = SearchAlgorithms.LinearSearch(items, "103");
        Console.WriteLine("Found via Linear: " + result1);

        Array.Sort(items);

        Console.WriteLine("\n--- Binary Search Test (Sorted Array) ---");
        Product result2 = SearchAlgorithms.BinarySearch(items, "103");
        Console.WriteLine("Found via Binary: " + result2);
    }
}