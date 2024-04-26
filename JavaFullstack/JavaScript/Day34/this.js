// Object with property value as normal function
var obj1 = {
    name:"Princy",
    gender:"Female",
    details: function (){
        console.log(this.name,this.gender);
    }
}
//By defalut point to current Object obj1
obj1.details();
 
var obj2 ={
     name:"Joseph",
     gender:"male",
     details:()=>{
        console.log(this.name,this.gender);
     }
}

//Object with property value as Arrow Function 
//By Defalut point to window object Obj2
obj2.details();

var obj3 ={
    name:"Joseph",
    gender:"male",
    details:()=>{
       console.log("THIS RETURN",this);
    }
}
obj3.details();

