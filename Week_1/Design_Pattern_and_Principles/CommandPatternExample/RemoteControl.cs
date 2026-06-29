public class RemoteControl {
    private ICommand buttonSlot;

    public void AssignCommand(ICommand command) {
        this.buttonSlot = command;
    }

    public void PressButton() {
        if (buttonSlot != null) {
            buttonSlot.Execute();
        }
    }
}