var Obj1 ={
    c : 100
}
var Obj2 ={
    c: 500
}
var Obj3 = {
    c:1000
}

function add(x,y){
    var result = x+y+ this.c;
    console.log(result);
}

add.call(Obj1,50,50);
add.call(Obj2,50,50);
add.call(Obj3,50,50);