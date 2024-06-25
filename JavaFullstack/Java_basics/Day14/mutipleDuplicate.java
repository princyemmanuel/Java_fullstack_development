package Day14;

public class mutipleDuplicate {
    public static void main(String[] args) {
        int [] a= {1,2,3,1,2,1};
        for(int i=0; i<a.length;i++){
            for(int j=i+1;j<a.length; j++){
                if(a[i]!=0 && a[i] == a[j]){
                    System.out.println(a[i]);
                    a[j] = 0;
                    break;
                }
            }
        } 
    }
}
