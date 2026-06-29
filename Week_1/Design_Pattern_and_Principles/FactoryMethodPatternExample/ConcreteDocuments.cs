using System;

class WordDocument : IDocument {
    public void Open() {
        Console.WriteLine("Opening Microsoft Word document...");
    }
}

class PdfDocument : IDocument {
    public void Open() {
        Console.WriteLine("Opening Adobe PDF document...");
    }
}

class ExcelDocument : IDocument {
    public void Open() {
        Console.WriteLine("Opening Microsoft Excel sheet...");
    }
}