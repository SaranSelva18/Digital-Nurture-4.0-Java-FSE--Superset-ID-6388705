public class ExcelDocument implements Document {
    
    @Override
    public void open(){
        System.out.println("Open the Excel Document----");
    }

    @Override
    public void read(){
        System.out.println("Read the Excel Document----");
    }
}
