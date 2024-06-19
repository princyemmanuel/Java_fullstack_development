package Day9;

public class Palindrome {
    public static void main(String[] args) {
        int num = 121;
        int NumCopy = num; // since number value changes in while loop
        int rev = 0;
        while(num>0){
            int rem = num%10;
            rev = rev*10+rem;
            num = num/10;
        }
        System.out.println(rev);
        if(rev == NumCopy){
            System.out.print("Palindrome Number");
        }
        else{
            System.out.print("Not a Palindrome Number");
        }
    }
}
