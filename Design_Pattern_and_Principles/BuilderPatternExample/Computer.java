public class Computer {
    private String CPU;
    private String RAM;
    private String storage;
    private boolean hasGraphicsCard;

    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.storage;
        this.hasGraphicsCard = builder.hasGraphicsCard;
    }

    @Override
    public String toString() {
        return "Computer Spec [CPU=" + CPU + ", RAM=" + RAM + ", Storage=" + storage + ", GPU=" + hasGraphicsCard + "]";
    }

    public static class Builder {
        private String CPU;
        private String RAM;
        private String storage = "256GB SSD";
        private boolean hasGraphicsCard = false;

        public Builder(String CPU, String RAM) {
            this.CPU = CPU;
            this.RAM = RAM;
        }

        public Builder setStorage(String storage) {
            this.storage = storage;
            return this;
        }

        public Builder setGraphicsCard(boolean hasGraphicsCard) {
            this.hasGraphicsCard = hasGraphicsCard;
            return this;
        }

        public Computer build() {
            return new Computer(this);
        }
    }
}
