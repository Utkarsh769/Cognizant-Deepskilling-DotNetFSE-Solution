public class FactoryMethodTest {
    public static void Main(string[] args) {
        DocumentFactory pdfFactory = new PdfFactory();
        IDocument myPdf = pdfFactory.CreateDocument();
        myPdf.Open();

        DocumentFactory wordFactory = new WordFactory();
        IDocument myWord = wordFactory.CreateDocument();
        myWord.Open();
    }
}