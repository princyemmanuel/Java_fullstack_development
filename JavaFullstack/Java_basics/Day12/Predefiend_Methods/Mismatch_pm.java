package Day12.Predefiend_Methods;

import java.util.Arrays;

public class Mismatch_pm {
    public static void main(String[] args) {
        int[] a = {1,2,3};
        int[] b = {1,2,1};
        int res = Arrays.mismatch(a, b);
        System.out.println(res);
    }
}
