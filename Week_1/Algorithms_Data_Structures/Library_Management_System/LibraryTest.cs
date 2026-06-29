using System;

public class LibraryTest {
    public static void Main(string[] args) {
        Book[] catalog = {
            new Book("B1", "Java Core", "Horstmann"),
            new Book("B2", "Clean Code", "Robert Martin"),
            new Book("B3", "Algorithms", "Sedgewick")
        };

        Console.WriteLine("Linear Search Lookup:");
        Book b1 = LibrarySearch.LinearSearch(catalog, "Clean Code");
        Console.WriteLine("Result: " + b1);
        Array.Sort(catalog);
        Console.WriteLine("\nBinary Search Lookup:");
        Book b2 = LibrarySearch.BinarySearch(catalog, "Algorithms");
        Console.WriteLine("Result: " + b2);
    }
}