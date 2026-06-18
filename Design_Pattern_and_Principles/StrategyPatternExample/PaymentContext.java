public class PaymentContext {
    private PaymentStrategy strategy;

    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }
    public void checkout(double amount) {
        if (strategy == null) {
            System.out.println("Error: No strategy selected.");
            return;
        }
        strategy.pay(amount);
    }
}