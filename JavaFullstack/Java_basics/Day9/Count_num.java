package Day9;

public class Count_num {
    public static void main(String[] args){
        int num = 123;
        int count = 0;
        while(num>0){
            // int rem = num%10;
            count = count+1;
            num = num/10 ;
        }
        System.out.print(count);
    }
}
