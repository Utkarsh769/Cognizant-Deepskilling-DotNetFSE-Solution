using System;

public class LibrarySearch {
    public static Book LinearSearch(Book[] books, string targetTitle) {
        for (int i = 0; i < books.Length; i++) {
            if (string.Equals(books[i].GetTitle(), targetTitle, StringComparison.OrdinalIgnoreCase)) {
                return books[i];
            }
        }
        return null;
    }

    public static Book BinarySearch(Book[] books, string targetTitle) {
        int low = 0;
        int high = books.Length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            int res = string.Compare(targetTitle, books[mid].GetTitle(), StringComparison.OrdinalIgnoreCase);

            if (res == 0) {
                return books[mid];
            } else if (res > 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }
}