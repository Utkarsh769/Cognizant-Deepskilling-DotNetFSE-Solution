import java.util.HashMap;

public class Inventory {
    private HashMap<String, Product> productMap;

    public Inventory() {
        productMap = new HashMap<>();
    }

    public void addProduct(Product product) {
        if (productMap.containsKey(product.getProductId())) {
            System.out.println("Product ID already exists. Use update instead.");
            return;
        }
        productMap.put(product.getProductId(), product);
        System.out.println("Added: " + product.getProductName());
    }

    public void updateProduct(String productId, int newQuantity, double newPrice) {
        Product product = productMap.get(productId);
        if (product != null) {
            product.setQuantity(newQuantity);
            product.setPrice(newPrice);
            System.out.println("Updated ID " + productId + " successfully.");
        } else {
            System.out.println("Product not found to update.");
        }
    }

    public void deleteProduct(String productId) {
        if (productMap.containsKey(productId)) {
            Product removed = productMap.remove(productId);
            System.out.println("Deleted: " + removed.getProductName());
        } else {
            System.out.println("Product not found to delete.");
        }
    }

    public void displayInventory() {
        System.out.println("\n--- Current Inventory Status ---");
        for (Product p : productMap.values()) {
            System.out.println(p);
        }
    }
}