//with function name
function withFnName(){
    console.log("with Fn name");
    return "NORMAL FUNCTION";
   
} 
withFnName();

//without Function Name
var newFN = function withOutFnName(){
    return "Without Function";
}
var data = newFN();
console.log(data)

//FUNCTION EXPRESSION
var myFunction = function(x,y){
    console.log(x,y);
}
myFunction(101,10);

//Arrow Function
var myArrowFn =(a)=>{
    console.log(a);
}
myArrowFn(208);