package Day14;

import java.util.Arrays;

public class CopyArray {
    public static void main(String[] args) {
        int[] a = {1,2,3,4};
        int size = a.length;
        int[] b = new int[size];
        for(int i =0;i<a.length;i++){
            b[i] = a[i];
            System.out.println("New Array : "+b[i]);
        }
        System.out.println("New Array : "+ Arrays.toString(b));
    }    
}
