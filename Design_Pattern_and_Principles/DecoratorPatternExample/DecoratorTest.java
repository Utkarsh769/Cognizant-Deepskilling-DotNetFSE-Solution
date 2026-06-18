public class DecoratorTest {
    public static void main(String[] args) {
        Notifier engine = new EmailNotifier();

        engine = new SMSNotifierDecorator(engine);

        engine = new SlackNotifierDecorator(engine);

        System.out.println("Dispatching combined update stream:");
        engine.send("Build #42 is deploying now.");
    }
}
