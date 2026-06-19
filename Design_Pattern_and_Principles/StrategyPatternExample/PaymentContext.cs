using System;

public class PaymentContext {
    private IPaymentStrategy strategy;

    public void SetPaymentStrategy(IPaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void Checkout(double amount) {
        if (strategy == null) {
            Console.WriteLine("Error: No strategy selected.");
            return;
        }
        strategy.Pay(amount);
    }
}