package Day13;

public class Print_Prime_num {
    public static void main(String[] args) {
        int[] a ={1,2,3,4,5};
        for(int i=0;i<a.length;i++){
            int count =0;
            for(int j=1;j<=a[i];j++){
                if(a[i]%j == 0){
                    count =count+1;
                }  
            }
            if(count ==2){
                System.out.println(a[i]);
            }
        }
    }
}
