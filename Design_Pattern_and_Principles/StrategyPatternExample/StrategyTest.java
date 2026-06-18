public class StrategyTest {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();
        context.setPaymentStrategy(new CreditCardPayment("1234567890123456"));
        context.checkout(120.75);
        context.setPaymentStrategy(new PayPalPayment("developer@example.com"));
        context.checkout(45.00);
    }
}