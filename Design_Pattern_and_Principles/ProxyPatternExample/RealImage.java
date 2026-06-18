public class RealImage implements Image {
    private String filename;

    public RealImage(String filename) {
        this.filename = filename;
        loadFromDisk();
    }

    private void loadFromDisk() {
        System.out.println("Loading heavy asset file [" + filename + "] from storage...");
    }

    public void display() {
        System.out.println("Displaying " + filename);
    }
}