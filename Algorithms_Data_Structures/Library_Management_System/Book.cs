using System;

public class Book : IComparable<Book> {
    private string bookId;
    private string title;
    private string author;

    public Book(string bookId, string title, string author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    public string GetTitle() { return title; }

    public int CompareTo(Book other) {
        if (other == null) return 1;
        return string.Compare(this.title, other.title, StringComparison.OrdinalIgnoreCase);
    }

    public override string ToString() {
        return $"[{bookId}] {title} by {author}";
    }
}