package Day12;

public class Array_Initialization {
    public static void main(String[]args){
        int[] a = {1,2,3,4};
        // System.out.print(a); // print memory address;

    //3ways to print array elements
                   
    //1.forloop
            for(int i=0;i<=2;i++){
                System.out.println(a[i]);
            }
    //length
            for(int i=0;i<a.length;i++){
                System.out.print(a[i]);
            }
    }
}
