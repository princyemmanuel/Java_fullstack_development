package Day9;

public class Sum_first_and_last {
    public static void main(String[]args){
        int num = 1234;
        int LastNum = num%10;
        while(num>10){
            num= num/10;
            System.out.println(num);
        }
        System.out.println(num);
        System.out.print(num+LastNum);
    }
}
