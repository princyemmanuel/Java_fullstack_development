public class Fibanocci_series {
    public static void main(String[] args){
        int first = 0;
        int second = 1;
        System.out.println(first);
        System.out.println(second);
        for(int i=1;i<8; i++){
            int sum = first + second;
            System.out.println(sum);
            first = second;
            second = sum;

        }
    }
   
}
