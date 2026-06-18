public class CommandTest {
    public static void main(String[] args) {
        Light livingRoomLight = new Light();
        RemoteControl remote = new RemoteControl();

        Command on = new LightOnCommand(livingRoomLight);
        Command off = new LightOffCommand(livingRoomLight);
        remote.assignCommand(on);
        remote.pressButton();
        remote.assignCommand(off);
        remote.pressButton();
    }
}
