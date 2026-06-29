using System;

public class DecoratorTest {
    public static void Main(string[] args) {
        INotifier engine = new EmailNotifier();
        engine = new SMSNotifierDecorator(engine);
        engine = new SlackNotifierDecorator(engine);

        Console.WriteLine("Dispatching combined update stream:");
        engine.Send("Build #42 is deploying now.");
    }
}