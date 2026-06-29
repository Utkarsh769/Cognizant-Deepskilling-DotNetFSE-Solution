using System;

class MobileApp : IObserver {
    public void Update(string stockSymbol, double price) {
        Console.WriteLine("[Mobile App UI] Update received: " + stockSymbol + " is now $" + price);
    }
}

class WebApp : IObserver {
    public void Update(string stockSymbol, double price) {
        Console.WriteLine("[Web Dashboard] Synchronized: " + stockSymbol + " adjusted to $" + price);
    }
}