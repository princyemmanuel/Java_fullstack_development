var userData = {
    name : "Princy Emmanuel",
    id : 101,
    email : "princy@gmail.com",
    isMarried :true,
    address : "Moet ct"

}
console.log("Initial Object",userData);

var value=  userData.isMarried;
var objectEmail = userData["email"];

console.log("Access values ",value,objectEmail);