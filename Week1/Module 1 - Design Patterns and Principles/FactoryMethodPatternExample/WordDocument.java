public class WordDocument implements Document {
    
    @Override
    public void open(){
        System.out.println("Open the Word Document----");
    }

    @Override
    public void read(){
        System.out.println("Read the Word Document----");
    }
}
