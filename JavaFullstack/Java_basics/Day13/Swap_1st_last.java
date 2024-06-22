package Day13;

public class Swap_1st_last {
    public static void main(String[]args){
        int[] a = {1,2,3,4,5};
        int first = a[0];
        int last = a[a.length -1];
        System.out.println("first = "+first);
        System.out.println("last = "+last);
        int temp = first;
        first= last;
        last = temp;
       
        System.out.println("first = "+first);
        System.out.println("last = "+last);

    }
}
