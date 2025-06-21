public class PdfDocument implements Document {
    
    @Override
    public void open(){
        System.out.println("Open the Pdf Document----");
    }

    @Override
    public void read(){
        System.out.println("Read the Pdf Document----");
    }
}
