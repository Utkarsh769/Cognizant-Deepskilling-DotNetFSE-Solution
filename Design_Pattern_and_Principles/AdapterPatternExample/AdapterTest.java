public class AdapterTest {
    public static void main(String[] args) {
        PaymentProcessor processor1 = new PayPalAdapter(new PayPalGateway());
        PaymentProcessor processor2 = new StripeAdapter(new StripeGateway());

        System.out.println("--- Testing Adapters ---");
        processor1.processPayment(49.99);
        processor2.processPayment(10.00);
    }
}
