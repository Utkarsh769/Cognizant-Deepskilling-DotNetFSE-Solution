public class BuilderTest {
    public static void main(String[] args) {
        Computer basicPc = new Computer.Builder("Intel i3", "8GB").build();
        
        Computer gamingPc = new Computer.Builder("AMD Ryzen 9", "32GB")
                .setStorage("2TB NVMe SSD")
                .setGraphicsCard(true)
                .build();

        System.out.println(basicPc);
        System.out.println(gamingPc);
    }
}
