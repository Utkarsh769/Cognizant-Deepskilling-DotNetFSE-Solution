public class SortTest {
    public static void main(String[] args) {
        Order[] batch1 = {
            new Order("O1", "Alice", 250.50),
            new Order("O2", "Bob", 45.00),
            new Order("O3", "Charlie", 600.00),
            new Order("O4", "David", 120.25)
        };

        System.out.println("--- Running Bubble Sort Test ---");
        SortAlgorithms.bubbleSort(batch1);
        for(Order o : batch1) System.out.println(o);

        Order[] batch2 = {
            new Order("O1", "Alice", 250.50),
            new Order("O2", "Bob", 45.00),
            new Order("O3", "Charlie", 600.00),
            new Order("O4", "David", 120.25)
        };

        System.out.println("\n--- Running Quick Sort Test ---");
        SortAlgorithms.quickSort(batch2, 0, batch2.length - 1);
        for(Order o : batch2) System.out.println(o);
    }
}