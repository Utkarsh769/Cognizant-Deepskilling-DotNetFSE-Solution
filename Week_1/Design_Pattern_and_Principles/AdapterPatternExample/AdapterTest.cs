using System;

public class AdapterTest {
    public static void Main(string[] args) {
        IPaymentProcessor processor1 = new PayPalAdapter(new PayPalGateway());
        IPaymentProcessor processor2 = new StripeAdapter(new StripeGateway());

        Console.WriteLine("--- Testing Adapters ---");
        processor1.ProcessPayment(49.99);
        processor2.ProcessPayment(10.00);
    }
}