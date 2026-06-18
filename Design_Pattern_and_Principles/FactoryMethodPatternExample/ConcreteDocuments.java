class WordDocument implements Document {
    public void open() {
        System.out.println("Opening Microsoft Word document...");
    }
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening Adobe PDF document...");
    }
}

class ExcelDocument implements Document {
    public void open() {
        System.out.println("Opening Microsoft Excel sheet...");
    }
}