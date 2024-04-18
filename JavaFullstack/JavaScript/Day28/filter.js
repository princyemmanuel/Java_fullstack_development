var array = [10,20,30,40,50,60,70,80,90];

var filterdArray = array.filter(function(element,index){
    return element > 40;
})
console.log(filterdArray);