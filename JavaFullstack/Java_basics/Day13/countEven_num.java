package Day13;

public class countEven_num {
    public static void main(String[] args) {
        int[] a = {1,2,4,6};
        int count = 0;
        for(int i=0;i<a.length;i++){
            if(a[i]%2==0){
                count = count+1;
            }
        }
        System.out.println(count);
    }
}
