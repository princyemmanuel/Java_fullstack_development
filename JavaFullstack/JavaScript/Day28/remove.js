var userData = {
    name : "Princy Emmanuel",
    id : 101,
    email : "princy@gmail.com",
    isMarried :true,
    address : "Moet ct"

}
console.log("Initial Object",userData);

delete userData.email;
delete userData["id"];
console.log("After delete ",userData);
