using System;

public class ProxyTest {
    public static void Main(string[] args) {
        IImage image = new ProxyImage("photo_render_4k.png");

        Console.WriteLine("First call: Image needs to be loaded.");
        image.Display();

        Console.WriteLine("\nSecond call: Image should load instantly via proxy cache.");
        image.Display();
    }
}