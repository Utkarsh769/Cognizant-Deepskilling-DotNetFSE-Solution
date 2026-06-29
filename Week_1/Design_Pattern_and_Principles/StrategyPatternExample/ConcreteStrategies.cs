using System;

class CreditCardPayment : IPaymentStrategy {
    private string cardNumber;

    public CreditCardPayment(string cardNumber) {
        this.cardNumber = cardNumber;
    }

    public void Pay(double amount) {
        Console.WriteLine("Processed checkout balance of $" + amount + " using Credit Card ending in " + cardNumber.Substring(cardNumber.Length - 4));
    }
}

class PayPalPayment : IPaymentStrategy {
    private string email;

    public PayPalPayment(string email) {
        this.email = email;
    }

    public void Pay(double amount) {
        Console.WriteLine("Processed checkout balance of $" + amount + " using PayPal login: " + email);
    }
}