package Day9;

public class Multiplication_Table {
    public static void main(String[]args){
        int num = 5;
        int product = 1;
        for(int i=1;i<=10;i++){
            product = num *i;
            System.out.println(i+ "*" +num +"=" +product);
        }
    }
}
