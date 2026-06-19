public class StrategyTest {
    public static void Main(string[] args) {
        PaymentContext context = new PaymentContext();

        context.SetPaymentStrategy(new CreditCardPayment("1234567890123456"));
        context.Checkout(120.75);

        context.SetPaymentStrategy(new PayPalPayment("developer@example.com"));
        context.Checkout(45.00);
    }
}