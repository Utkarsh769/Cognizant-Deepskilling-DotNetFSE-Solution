using System;

public class BuilderTest {
    public static void Main(string[] args) {
        Computer basicPc = new Computer.Builder("Intel i3", "8GB").Build();
        
        Computer gamingPc = new Computer.Builder("AMD Ryzen 9", "32GB")
                .SetStorage("2TB NVMe SSD")
                .SetGraphicsCard(true)
                .Build();

        Console.WriteLine(basicPc);
        Console.WriteLine(gamingPc);
    }
}