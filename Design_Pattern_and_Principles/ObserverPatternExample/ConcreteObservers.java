class MobileApp implements Observer {
    public void update(String stockSymbol, double price) {
        System.out.println("[Mobile App UI] Update received: " + stockSymbol + " is now $" + price);
    }
}

class WebApp implements Observer {
    public void update(String stockSymbol, double price) {
        System.out.println("[Web Dashboard] Synchronized: " + stockSymbol + " adjusted to $" + price);
    }
}
