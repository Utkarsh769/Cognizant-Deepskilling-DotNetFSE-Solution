using System;

public class ObserverTest {
    public static void Main(string[] args) {
        StockMarket market = new StockMarket();

        MobileApp app = new MobileApp();
        WebApp web = new WebApp();

        market.RegisterObserver(app);
        market.RegisterObserver(web);

        Console.WriteLine("Broadcasting market ticker updates...");
        market.UpdatePrice("AAPL", 185.50);
    }
}