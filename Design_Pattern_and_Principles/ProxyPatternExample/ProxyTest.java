public class ProxyTest {
    public static void main(String[] args) {
        Image image = new ProxyImage("photo_render_4k.png");

        System.out.println("First call: Image needs to be loaded.");
        image.display();

        System.out.println("\nSecond call: Image should load instantly via proxy cache.");
        image.display();
    }
}
