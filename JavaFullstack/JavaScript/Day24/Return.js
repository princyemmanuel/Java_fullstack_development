//======================== Returning direct value
function getName(){
    return "Princy Emmanuel";
}
var Name = getName();
console.log("Username : ",Name);

// ========================Returning value of Variable
function getAddress(){
    var userAddress = "8004 MOET CT"
    return userAddress;
}
var address = getAddress();
console.log("Address : ",address);

//=========================BY adding Expression
function Age(){
    return 8+30;
}
var age= Age();
console.log("Age",age);

//=======Execution of function will stop after the return statement
function sampleReturn(x,y){
    var a = x;
    var b = y;
    return a+b;
    console.log(a);//function stopped execution
}
var data = sampleReturn(100,200);
console.log(data)
