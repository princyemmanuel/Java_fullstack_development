package Day14;

import java.util.Arrays;

public class Merge2Array {
    public static void main(String[] args) {
        int[] a = {1,2,3};
        int[] b ={4,5,6};
        int l1 = a.length;
        int l2 = b.length;
        int[] C = new int[l1+l2];
        for(int i=0;i<a.length;i++){
            C[i]= a[i];

        }
        for(int j=0;j<b.length;j++){
            C[l1] = b[j];
            l1++;
        }
System.out.println(Arrays.toString(C));
    }
}
