import java.util.Arrays;

public class SearchTest {
    public static void main(String[] args) {
        Product[] items = {
            new Product("105", "Wireless Mouse", "Electronics"),
            new Product("101", "Mechanical Keyboard", "Electronics"),
            new Product("103", "Gaming Monitor", "Electronics"),
            new Product("102", "USB-C Cable", "Accessories")
        };

        System.out.println("--- Linear Search Test ---");
        Product result1 = SearchAlgorithms.linearSearch(items, "103");
        System.out.println("Found via Linear: " + result1);

        Arrays.sort(items);

        System.out.println("\n--- Binary Search Test (Sorted Array) ---");
        Product result2 = SearchAlgorithms.binarySearch(items, "103");
        System.out.println("Found via Binary: " + result2);
    }
}
