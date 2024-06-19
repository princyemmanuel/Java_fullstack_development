package Day9;

public class SumOfDigits {
    public static void main(String[] args) {
        int num = 123;
        int sum = 0;
        while (num > 0) {
            int rem = num % 10; //to get last digit
            sum = sum + rem;
            num = num / 10;//to remove last digit
        }
        System.out.println(sum);
    }

}
