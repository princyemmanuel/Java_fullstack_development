package Day13;

public class Even_num {
    public static void main(String[] args){
        int[] a ={1,2,3,4,6};
        for(int i = 0;i<a.length;i++){
            if(a[i]%2 == 0){
                System.out.println(a[i]);
            }
        }
    }
}
