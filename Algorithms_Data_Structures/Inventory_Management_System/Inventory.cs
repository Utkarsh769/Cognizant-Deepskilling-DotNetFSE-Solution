using System;
using System.Collections.Generic;

public class Inventory {
    // Dictionary is C#'s version of a HashMap
    private Dictionary<string, Product> productMap;

    public Inventory() {
        productMap = new Dictionary<string, Product>();
    }

    public void AddProduct(Product product) {
        if (productMap.ContainsKey(product.GetProductId())) {
            Console.WriteLine("Product ID already exists. Use update instead.");
            return;
        }
        productMap.Add(product.GetProductId(), product);
        Console.WriteLine("Added: " + product.GetProductName());
    }

    public void UpdateProduct(string productId, int newQuantity, double newPrice) {
        if (productMap.TryGetValue(productId, out Product product)) {
            product.SetQuantity(newQuantity);
            product.SetPrice(newPrice);
            Console.WriteLine("Updated ID " + productId + " successfully.");
        } else {
            Console.WriteLine("Product not found to update.");
        }
    }

    public void DeleteProduct(string productId) {
        if (productMap.ContainsKey(productId)) {
            Product removed = productMap[productId];
            productMap.Remove(productId);
            Console.WriteLine("Deleted: " + removed.GetProductName());
        } else {
            Console.WriteLine("Product not found to delete.");
        }
    }

    public void DisplayInventory() {
        Console.WriteLine("\n--- Current Inventory Status ---");
        foreach (Product p in productMap.Values) {
            Console.WriteLine(p);
        }
    }
}