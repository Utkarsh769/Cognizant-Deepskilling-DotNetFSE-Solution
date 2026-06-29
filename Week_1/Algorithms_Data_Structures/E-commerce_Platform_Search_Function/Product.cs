using System;

public class Product : IComparable<Product> {
    private string productId;
    private string productName;
    private string category;

    public Product(string productId, string productName, string category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public string GetProductId() { return productId; }
    public string GetProductName() { return productName; }

    public int CompareTo(Product other) {
        if (other == null) return 1;
        return string.Compare(this.productId, other.productId);
    }

    public override string ToString() {
        return $"[{productId}] {productName} ({category})";
    }
}