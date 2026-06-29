using System.Collections.Generic;

public class StockMarket : IStock {
    private List<IObserver> observers;
    private string stockSymbol;
    private double price;

    public StockMarket() {
        observers = new List<IObserver>();
    }

    public void RegisterObserver(IObserver o) {
        observers.Add(o);
    }

    public void RemoveObserver(IObserver o) {
        observers.Remove(o);
    }

    public void UpdatePrice(string stockSymbol, double price) {
        this.stockSymbol = stockSymbol;
        this.price = price;
        NotifyObservers();
    }

    public void NotifyObservers() {
        foreach (IObserver o in observers) {
            o.Update(stockSymbol, price);
        }
    }
}