function fn(){         // this function is a global scope(scope of fn is global)
    var price = 67676; // this variable is a function scope since defined inside a function 
}                       //this var scope is fn scope

function fn1(){
    function getdata(){  //this fn scope is function scope
        console.log("getData is called");
    }
    getdata();
    // console.log(price);
}
fn1();
// getData(); // Invalid

// console.log(price); //Invalid