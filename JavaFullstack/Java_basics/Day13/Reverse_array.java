package Day13;

import java.util.Arrays;

public class Reverse_array {
    public static void main(String[] args) {
        int[] a= {1,2,3,4};
        int start = 0;
        int end = a.length-1;
        System.out.println("Initial Array : "+ (Arrays.toString(a)));
        while(start<end){
            int temp = a[start];
            a[start] = a[end];
            a[end] = temp;
            start++;
            end--;
        }
        System.out.println("Reversed Array : "+(Arrays.toString(a)));
    }
}
