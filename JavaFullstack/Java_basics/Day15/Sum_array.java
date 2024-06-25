package Day15;

public class Sum_array {
    public static void main(String[] args) {
        int[] a= {6,3,9,1,2,8,4,5};
        for(int i=0;i<a.length-1;i++){
            for(int j = i+1;j<a.length;j++){
                if(a[i] +a[j] == 10){
                    System.out.println(a[i] + "+" +a[j] + "="+ "10");
                }
            }
        }
    }
}
