public class Order {
    private string orderId;
    private string customerName;
    private double totalPrice;

    public Order(string orderId, string customerName, double totalPrice) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalPrice = totalPrice;
    }

    public double GetTotalPrice() { return totalPrice; }

    public override string ToString() {
        return $"OrderID: {orderId} | Client: {customerName} | Total: ${totalPrice}";
    }
}