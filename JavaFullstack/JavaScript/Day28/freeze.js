var Obj1={
    name : "Princy Emmanuel",
    id : 101,
    email : "princy@gmail.com",
    isMarried :true,
    address : "Moet ct"
}
Object.freeze(Obj1);

delete Obj1.email;
Obj1["city"] = "hyd";
Obj1.isMarried = false;
console.log(Obj1);