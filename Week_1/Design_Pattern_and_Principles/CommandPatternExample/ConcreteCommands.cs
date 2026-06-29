class LightOnCommand : ICommand {
    private Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    public void Execute() {
        light.TurnOn();
    }
}

class LightOffCommand : ICommand {
    private Light light;

    public LightOffCommand(Light light) {
        this.light = light;
    }

    public void Execute() {
        light.TurnOff();
    }
}