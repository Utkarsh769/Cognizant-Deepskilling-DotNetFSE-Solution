using System;

class SMSNotifierDecorator : NotifierDecorator {
    public SMSNotifierDecorator(INotifier notifier) : base(notifier) { }

    public override void Send(string message) {
        base.Send(message);
        SendSMS(message);
    }

    private void SendSMS(string message) {
        Console.WriteLine("Sending SMS Alert: " + message);
    }
}

class SlackNotifierDecorator : NotifierDecorator {
    public SlackNotifierDecorator(INotifier notifier) : base(notifier) { }

    public override void Send(string message) {
        base.Send(message);
        SendSlack(message);
    }

    private void SendSlack(string message) {
        Console.WriteLine("Posting to Slack: " + message);
    }
}