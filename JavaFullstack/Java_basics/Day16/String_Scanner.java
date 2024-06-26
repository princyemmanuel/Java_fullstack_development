package Day16;

import java.util.Scanner;

public class String_Scanner {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter String : ");
        String s1 = s.next();
        String s2 = s.nextLine();
        System.out.println("String  : "+ s1);
        System.out.println("String with multiple word : "+ s2);  
    }
}
