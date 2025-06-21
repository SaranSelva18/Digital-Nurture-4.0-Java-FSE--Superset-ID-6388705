public class Application {
    public static void main(String[] args) {
        DocumentFactory factory;

        factory = new WordDocumentFactory();
        Document Word=factory.createDocument();
        Word.open();
        Word.read();

        factory = new PdfDocumentFactory();
        Document Pdf=factory.createDocument();
        Pdf.open();
        Pdf.read();

        factory = new ExcelDocumentFactory();
        Document Excel=factory.createDocument();
        Excel.open();
        Excel.read();

    }
}
