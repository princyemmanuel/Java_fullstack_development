package Day12;

public class Array_Declaration {
    public static void main(String[]args){
        int[] VarName = new int[3];
        VarName[0]= 2;
        VarName[1]= 3;
        VarName[2]= 1;
        System.out.println("varName[0] : "+VarName[0]);
        // System.out.print("varName[7]"+VarName[7]); //error  ==>ArrayIndexOutBoundexception

        for(int i=0;i<VarName.length;i++){
            System.out.print(VarName[i]);   
        }
    }
}
