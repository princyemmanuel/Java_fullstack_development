package Day12.Predefiend_Methods;

import java.util.Arrays;

public class Copy_Range_pm {
    public static void main(String[] args) {
        int[] a = {2,1,9};
        int[] b = Arrays.copyOfRange(a, 0, 3);
        System.out.println(Arrays.toString(b));
    }
}
