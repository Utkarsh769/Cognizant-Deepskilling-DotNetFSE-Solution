public class ObserverTest {
    public static void main(String[] args) {
        StockMarket market = new StockMarket();

        MobileApp app = new MobileApp();
        WebApp web = new WebApp();

        market.registerObserver(app);
        market.registerObserver(web);

        System.out.println("Broadcasting market ticker updates...");
        market.updatePrice("AAPL", 185.50);
    }
}
