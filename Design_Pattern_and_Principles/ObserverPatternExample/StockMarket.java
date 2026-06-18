import java.util.ArrayList;

public class StockMarket implements Stock {
    private ArrayList<Observer> observers;
    private String stockSymbol;
    private double price;

    public StockMarket() {
        observers = new ArrayList<>();
    }

    public void registerObserver(Observer o) {
        observers.add(o);
    }

    public void removeObserver(Observer o) {
        observers.remove(o);
    }

    public void updatePrice(String stockSymbol, double price) {
        this.stockSymbol = stockSymbol;
        this.price = price;
        notifyObservers();
    }

    public void notifyObservers() {
        for (Observer o : observers) {
            o.update(stockSymbol, price);
        }
    }
}
