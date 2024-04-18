var array = [10,20,30,40,50,60,70,80,90];

var newArray = array.map(function(element,index){
    return element + 100;
})
console.log(newArray);