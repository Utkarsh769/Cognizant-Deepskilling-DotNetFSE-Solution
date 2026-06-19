public class SortAlgorithms {
    public static void BubbleSort(Order[] orders) {
        int n = orders.Length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (orders[j].GetTotalPrice() > orders[j + 1].GetTotalPrice()) {
                    Order temp = orders[j];
                    orders[j] = orders[j + 1];
                    orders[j + 1] = temp;
                }
            }
        }
    }
    public static void QuickSort(Order[] orders, int low, int high) {
        if (low < high) {
            int pivotIndex = Partition(orders, low, high);
            QuickSort(orders, low, pivotIndex - 1);
            QuickSort(orders, pivotIndex + 1, high);
        }
    }

    private static int Partition(Order[] orders, int low, int high) {
        double pivot = orders[high].GetTotalPrice();
        int i = (low - 1);

        for (int j = low; j < high; j++) {
            if (orders[j].GetTotalPrice() <= pivot) {
                i++;
                Order temp = orders[i];
                orders[i] = orders[j];
                orders[j] = temp;
            }
        }
        Order temp2 = orders[i + 1];
        orders[i + 1] = orders[high];
        orders[high] = temp2;

        return i + 1;
    }
}