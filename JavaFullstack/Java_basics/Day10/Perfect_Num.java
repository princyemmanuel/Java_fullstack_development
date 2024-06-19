public class Perfect_Num {
    public static void main(String[] args){
        int num = 10;
        int ori = num;
        int sum = 0;
        for(int i = 1;i<num;i++){
            if(num%i==0){
                sum= sum+i;
            }    
        }
        if(sum==ori){
            System.out.println("Perfect Number");
        }
        else{
            System.out.println("Not a Perfect Number");
        }
    }
}
