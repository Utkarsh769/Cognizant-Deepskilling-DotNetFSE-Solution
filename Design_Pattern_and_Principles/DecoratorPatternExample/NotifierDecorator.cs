public abstract class NotifierDecorator : INotifier {
    protected INotifier wrappedNotifier;

    public NotifierDecorator(INotifier notifier) {
        this.wrappedNotifier = notifier;
    }

    public virtual void Send(string message) {
        wrappedNotifier.Send(message);
    }
}