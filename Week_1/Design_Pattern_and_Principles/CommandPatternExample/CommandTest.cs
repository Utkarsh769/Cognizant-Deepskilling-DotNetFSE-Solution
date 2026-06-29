public class CommandTest {
    public static void Main(string[] args) {
        Light livingRoomLight = new Light();
        RemoteControl remote = new RemoteControl();

        ICommand on = new LightOnCommand(livingRoomLight);
        ICommand off = new LightOffCommand(livingRoomLight);

        remote.AssignCommand(on);
        remote.PressButton();

        remote.AssignCommand(off);
        remote.PressButton();
    }
}