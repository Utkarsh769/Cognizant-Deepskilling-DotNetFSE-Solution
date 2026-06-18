public class LibrarySearch {

    public static Book linearSearch(Book[] books, String targetTitle) {
        for (int i = 0; i < books.length; i++) {
            if (books[i].getTitle().equalsIgnoreCase(targetTitle)) {
                return books[i];
            }
        }
        return null;
    }

    public static Book binarySearch(Book[] books, String targetTitle) {
        int low = 0;
        int high = books.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            int res = targetTitle.compareToIgnoreCase(books[mid].getTitle());

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
