using System;

public class RealImage : IImage {
    private string filename;

    public RealImage(string filename) {
        this.filename = filename;
        LoadFromDisk();
    }

    private void LoadFromDisk() {
        Console.WriteLine("Loading heavy asset file [" + filename + "] from storage...");
    }

    public void Display() {
        Console.WriteLine("Displaying " + filename);
    }
}