package Day15;

public class Leader_Element {
    public static void main(String[] args) {
        int[] a = { 2, 7, 4, 1 };
        int leader = a[a.length - 1];//1=>4=>7
        System.out.println(leader);
        for (int i = a.length - 2; i >= 0; i--) {
            if (a[i] > leader) {
                System.out.println(a[i]);
                leader = a[i];
            }

        }
    }
}
