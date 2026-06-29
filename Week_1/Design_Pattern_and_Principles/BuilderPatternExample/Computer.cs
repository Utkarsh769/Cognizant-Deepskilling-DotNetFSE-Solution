public class Computer {
    private string CPU;
    private string RAM;
    private string storage;
    private bool hasGraphicsCard;

    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.Storage;
        this.hasGraphicsCard = builder.HasGraphicsCard;
    }

    public override string ToString() {
        return $"Computer Spec [CPU={CPU}, RAM={RAM}, Storage={storage}, GPU={hasGraphicsCard.ToString().ToLower()}]";
    }

    public class Builder {
        public string CPU { get; }
        public string RAM { get; }
        public string Storage { get; private set; } = "256GB SSD";
        public bool HasGraphicsCard { get; private set; } = false;

        public Builder(string cpu, string ram) {
            this.CPU = cpu;
            this.RAM = ram;
        }

        public Builder SetStorage(string storage) {
            this.Storage = storage;
            return this;
        }

        public Builder SetGraphicsCard(bool hasGraphicsCard) {
            this.HasGraphicsCard = hasGraphicsCard;
            return this;
        }

        public Computer Build() {
            return new Computer(this);
        }
    }
}