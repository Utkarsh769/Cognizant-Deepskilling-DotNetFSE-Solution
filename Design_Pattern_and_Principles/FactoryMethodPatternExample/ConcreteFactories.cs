class WordFactory : DocumentFactory {
    public override IDocument CreateDocument() {
        return new WordDocument();
    }
}

class PdfFactory : DocumentFactory {
    public override IDocument CreateDocument() {
        return new PdfDocument();
    }
}

class ExcelFactory : DocumentFactory {
    public override IDocument CreateDocument() {
        return new ExcelDocument();
    }
}