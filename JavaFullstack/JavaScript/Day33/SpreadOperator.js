var userData ={
    username : "Princy Emmanuel",
    id:101,
    city: "smyrna"
}
var anotherUserData={
    ...userData, 
    State: "TN",
    username : "Joseph Thomas",

}
var sampleData ={
    ...anotherUserData
}

//USING ARRAY
var array1 = [10,20,30,40];
var array2 = [...array1, 50,60]
console.log(anotherUserData);
console.log(sampleData);
console.log(array2);