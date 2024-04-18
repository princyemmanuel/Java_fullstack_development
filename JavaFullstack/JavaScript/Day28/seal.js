var Obj1={
    name : "Princy Emmanuel",
    id : 101,
    email : "princy@gmail.com",
    isMarried :true,
    address : "Moet ct"
}
Object.seal(Obj1);
Obj1.city = "HYD";
delete Obj1.address;
Obj1.isMarried = false;//updation will work in seal
console.log(Obj1);