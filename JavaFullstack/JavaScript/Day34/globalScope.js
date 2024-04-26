var city = "Kochi";// global scope variable

function f1(){      // Global scope function
    console.log("Global Scope", city);
    if(city === "Kochi"){
    var gender = "male";  // Not a global scope
    function f2(){        // Not a global scope
        console.log(gender);
        console.log(f1());
    }
}
}
f1();
if(city === "Kochi"){
    var gender = "male";  // Not a global scope
    function f2(){        // Not a global scope
        console.log(gender);
        console.log(f1());
    }
}