
public class RemoteControl {
    private Command buttonSlot;

    public void assignCommand(Command command) {
        this.buttonSlot = command;
    }

    public void pressButton() {
        if (buttonSlot != null) {
            buttonSlot.execute();
        }
    }
}
