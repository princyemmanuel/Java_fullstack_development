package Day16;

public class Sum_Diagonal {
    public static void main(String[] args) {
        int[][] a = { { 1, 2, 3 }, { 3, 4, 8 }, { 2, 3, 4 } };
        int[][] b = { { 1, 2, 4 }, { 3, 4, 5 },{3,4,5} };
        int sum = 0;
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                System.out.print(a[i][j] + b[i][j]);
                if (i == j) {
                    sum = sum + a[i][j]+b[i][j];
                }
            }
            System.out.println();
        }
        System.out.print("Sum of Diagonal : " + sum);

    }
}
