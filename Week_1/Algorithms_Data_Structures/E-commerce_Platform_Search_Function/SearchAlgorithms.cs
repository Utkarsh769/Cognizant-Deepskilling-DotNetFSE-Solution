using System;

public class SearchAlgorithms {
    public static Product LinearSearch(Product[] products, string targetId) {
        for (int i = 0; i < products.Length; i++) {
            if (products[i].GetProductId() == targetId) {
                return products[i];
            }
        }
        return null;
    }

    public static Product BinarySearch(Product[] products, string targetId) {
        int left = 0;
        int right = products.Length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = string.Compare(products[mid].GetProductId(), targetId);

            if (comparison == 0) {
                return products[mid];
            } else if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}