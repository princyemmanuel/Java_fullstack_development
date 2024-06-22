package Day14;

public class checkNumInA {
    public static void main(String[] args) {
        int[] a ={1,2,2,4};
        int testNumber = 2;
        int count = 0;
        for(int i=0;i<a.length;i++){
            if(a[i] == testNumber){
                count =count+1;
                System.out.println("Element is found");
            }
            
        }
        System.out.println(count);
    }
}
