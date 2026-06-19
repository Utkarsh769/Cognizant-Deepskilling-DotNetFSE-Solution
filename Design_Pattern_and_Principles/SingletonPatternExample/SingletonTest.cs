using System;

public class SingletonTest {
    public static void Main(string[] args) {
        Logger log1 = Logger.GetInstance();
        Logger log2 = Logger.GetInstance();

        log1.Log("Checking singleton behavior...");

        if (object.ReferenceEquals(log1, log2)) {
            Console.WriteLine("Verification Passed: Both variables reference the exact same instance.");
        } else {
            Console.WriteLine("Verification Failed: Instances do not match.");
        }
    }
}