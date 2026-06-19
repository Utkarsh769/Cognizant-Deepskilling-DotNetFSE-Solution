using System;

class PayPalGateway {
    public void SendPayment(double amountInUSD) {
        Console.WriteLine("Processing payment of $" + amountInUSD + " through PayPal.");
    }
}

class StripeGateway {
    public void ChargeInCents(int amountInCents) {
        Console.WriteLine("Charging total of " + amountInCents + " cents through Stripe.");
    }
}