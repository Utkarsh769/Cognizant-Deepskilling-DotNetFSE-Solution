using System;

public class Logger {
    private static Logger instance = null;
    private Logger() {
        Console.WriteLine("System Logger initialized.");
    }

    public static Logger GetInstance() {
        if (instance == null) {
            instance = new Logger(); // Lazy loading execution
        }
        return instance;
    }

    public void Log(string message) {
        Console.WriteLine("[LOG]: " + message);
    }
}