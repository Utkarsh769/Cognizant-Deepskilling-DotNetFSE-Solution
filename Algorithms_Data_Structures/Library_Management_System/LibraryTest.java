import java.util.Arrays;

public class LibraryTest {
    public static void main(String[] args) {
        Book[] catalog = {
            new Book("B1", "Java Core", "Horstmann"),
            new Book("B2", "Clean Code", "Robert Martin"),
            new Book("B3", "Algorithms", "Sedgewick")
        };

        System.out.println("Linear Search Lookup:");
        Book b1 = LibrarySearch.linearSearch(catalog, "Clean Code");
        System.out.println("Result: " + b1);
        Arrays.sort(catalog);

        System.out.println("\nBinary Search Lookup:");
        Book b2 = LibrarySearch.binarySearch(catalog, "Algorithms");
        System.out.println("Result: " + b2);
    }
}