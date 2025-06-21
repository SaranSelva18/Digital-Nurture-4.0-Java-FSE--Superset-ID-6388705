import java.util.Arrays;

public class ECommerceStore {
    public static void main(String[] args) {

        Product[] products = { new Product(101, "Apple Iphone", "Mobiles"),
                new Product(102, "Levi's Men's Jeans", "Clothing"),
                new Product(103, "Samsung 55-inch Smart TV", "Televisions"),
                new Product(104, "Acer Nitro V15", "Laptops") };

        // Linear Search

        Product foundProduct = LinearSearch.linearSearch(products, "Acer Nitro V15");
        System.out.println("Linear Search\n" + (foundProduct != null ? foundProduct : "Product not found"));
        System.out.println();

        
        // Binary Search
        // For binary search, the array has be sorted by productName.

        Arrays.sort(products, (p1, p2) -> p1.getProductName().compareToIgnoreCase(p2.getProductName()));

        foundProduct = BinarySearch.binarySearch(products, "Acer Nitro V15");
        System.out.println("Binary Search\n" + (foundProduct != null ? foundProduct : "Product not found"));
    }
}