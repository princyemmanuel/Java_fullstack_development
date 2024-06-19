package Day9;

public class Reverse_Num {
    public static void main(String[]args){
        int num = 123;
        int rev = 0;
        while(num>0){
            int rem = num%10;//to get last digit
            rev = rev*10+rem; // to reverse num
            num = num/10;//to remove Last digit
        }
        System.out.print(rev);
    }
}
