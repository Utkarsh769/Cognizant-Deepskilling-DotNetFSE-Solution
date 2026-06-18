
class PayPalGateway {
    public void sendPayment(double amountInUSD) {
        System.out.println("Processing payment of $" + amountInUSD + " through PayPal.");
    }
}

class StripeGateway {
    public void chargeInCents(int amountInCents) {
        System.out.println("Charging total of " + amountInCents + " cents through Stripe.");
    }
}