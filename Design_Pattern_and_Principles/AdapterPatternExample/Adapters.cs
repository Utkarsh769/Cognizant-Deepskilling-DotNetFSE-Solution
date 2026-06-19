class PayPalAdapter : IPaymentProcessor {
    private PayPalGateway payPal;

    public PayPalAdapter(PayPalGateway payPal) {
        this.payPal = payPal;
    }

    public void ProcessPayment(double amount) {
        payPal.SendPayment(amount);
    }
}

class StripeAdapter : IPaymentProcessor {
    private StripeGateway stripe;

    public StripeAdapter(StripeGateway stripe) {
        this.stripe = stripe;
    }

    public void ProcessPayment(double amount) {
        int cents = (int)(amount * 100);
        stripe.ChargeInCents(cents);
    }
}