//var is a funnction scope
function f1(){
    var city = "Delhi"; //function scope

    if(true){
        var gender = "male";
        console.log(city);
    }
    switch ("pune") {
        case "pune":
          console.log(city);
          console.log(gender);
    
        case "mumbai":
          console.log(city);
      }
      console.log(gender);
    
}
f1();

//let and const are Block scope

function f2(){
  let city = "Kochi"; //block scope
  const id = 102;

  if (true) { //block scope
    var price = 123;
    let gender = "female";
    const pin = 123;
    console.log(city);

    if (true) {
      let country = "india";//block scope
      console.log(gender, pin);
    }

    console.log(country); //invalid
  }

  switch ("pune") {
    case "pune":
      console.log(city);
      console.log(gender, pin); // Invalid

    case "mumbai":
      console.log(city);
  }
  console.log(gender, pin); //Invalid
    
}
f1(); 
