//Symbol Data type

let value1 = Symbol("hello");
let value2 = Symbol("hello");

function newfn() {
    console.log("sbdvsg")
}

console.log(value1 === value2);
console.log(typeof(newfn));
// different as they are of symbol data type with unique identifier

