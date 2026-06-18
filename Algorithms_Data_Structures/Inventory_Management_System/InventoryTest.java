public class InventoryTest {
    public static void main(String[] args) {
        Inventory warehouse = new Inventory();

        Product p1 = new Product("P001", "Laptop", 10, 899.99);
        Product p2 = new Product("P002", "Smartphone", 50, 499.99);

        warehouse.addProduct(p1);
        warehouse.addProduct(p2);
        warehouse.displayInventory();

        warehouse.updateProduct("P001", 8, 849.99);
        warehouse.deleteProduct("P002");
        
        warehouse.displayInventory();
    }
}
