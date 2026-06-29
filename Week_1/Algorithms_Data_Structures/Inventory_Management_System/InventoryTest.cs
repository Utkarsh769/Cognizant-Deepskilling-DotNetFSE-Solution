public class InventoryTest {
    public static void Main(string[] args) {
        Inventory warehouse = new Inventory();

        Product p1 = new Product("P001", "Laptop", 10, 899.99);
        Product p2 = new Product("P002", "Smartphone", 50, 499.99);

        warehouse.AddProduct(p1);
        warehouse.AddProduct(p2);
        warehouse.DisplayInventory();

        warehouse.UpdateProduct("P001", 8, 849.99);
        warehouse.DeleteProduct("P002");
        
        warehouse.DisplayInventory();
    }
}