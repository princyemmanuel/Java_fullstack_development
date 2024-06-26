package Day16;

import java.util.Scanner;

public class Char_Scanner {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter Char Value : ");
        char a = s.next().charAt(0);
        System.out.println("Char value : " + a);
    }

}
