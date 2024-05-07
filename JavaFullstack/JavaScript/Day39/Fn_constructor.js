function User(name, city, gender){
    this.username = name;
    this.cityname = city;
    this.gender =gender;
}

var Obj1 = new User("Princy",'Nashville',"female");
Obj1.job ="Software Engineer"
console.log(Obj1);


var Obj2 = new User("Joseph",'Nashville',"male");
delete Obj2.cityname
console.log(Obj2);

User.prototype.country = "USA";
console.log("new Object",Obj1.country );
console.log("new Object",Obj2.country );
console.log("new Object",Obj2);