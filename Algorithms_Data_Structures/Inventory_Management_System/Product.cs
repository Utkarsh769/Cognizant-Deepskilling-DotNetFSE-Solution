public class Product {
    private string productId;
    private string productName;
    private int quantity;
    private double price;

    public Product(string productId, string productName, int quantity, double price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public string GetProductId() { return productId; }
    public string GetProductName() { return productName; }
    
    public int GetQuantity() { return quantity; }
    public void SetQuantity(int quantity) { this.quantity = quantity; }
    
    public double GetPrice() { return price; }
    public void SetPrice(double price) { this.price = price; }

    public override string ToString() {
        return $"ID: {productId} | Name: {productName} | Qty: {quantity} | Price: ${price}";
    }
}