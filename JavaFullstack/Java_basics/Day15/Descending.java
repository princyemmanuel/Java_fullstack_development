package Day15;

import java.util.Arrays;

public class Descending {
    public static void main(String[] args) {
        int[] a = {1,2,3,4,5};
        for(int i=0;i<a.length;i++){
            for(int j = i+1;j<a.length;j++){
                if(a[i]<a[j]){
                    int temp = a[i];
                    a[i]= a[j];
                    a[j] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(a));
        System.out.println("Largest Number : "+a[0]);
        System.out.println("Smallest Number : "+a[a.length-1]);
        System.out.println("2nd Max Number : "+a[1]);
    }
}
