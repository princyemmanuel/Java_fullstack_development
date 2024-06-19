public class Perfect_Numbers {
    public static void main(String[] args) {
        int num = 6;
        int org = num;
        int sum = 0;
        for(int i= 1; i<num;i++) {
            if(num%i == 0) {
                sum = sum + i;
            }
        }
        if(sum == org) {
            System.out.println("Perfect Number");
        }
        else {
            System.out.println("Not a perfect number");
        }
    }
}
