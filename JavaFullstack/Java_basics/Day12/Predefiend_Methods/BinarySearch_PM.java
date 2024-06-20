package Day12.Predefiend_Methods;

import java.util.Arrays;

public class BinarySearch_PM {
    public static void main(String[]args){
        int[] a ={1,2,3};
        int bSearch = Arrays.binarySearch(a, 3);
        System.out.println(bSearch);
        int bSearch1 = Arrays.binarySearch(a, 1);
        System.out.println(bSearch1);
    }
}
