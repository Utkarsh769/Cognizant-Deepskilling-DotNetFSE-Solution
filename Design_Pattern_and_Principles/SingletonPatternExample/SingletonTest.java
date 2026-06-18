
public class SingletonTest {
    public static void main(String[] args) {
        Logger log1 = Logger.getInstance();
        Logger log2 = Logger.getInstance();

        log1.log("Checking singleton behavior...");

        if (log1 == log2) {
            System.out.println("Verification Passed: Both variables reference the exact same instance.");
        } else {
            System.out.println("Verification Failed: Instances do not match.");
        }
    }
}
