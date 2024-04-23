function getInputValue(){
    //return array elements with id name
    // var inputCollection = document.querySelectorAll('#name');

    //return array with classname-myclass ie 4 div, h2,2 input
    // var inputCollection = document.querySelectorAll('.myClass');

    //return array with 2 input elements
    var inputCollection = document.querySelectorAll('input');

    var inputDomElement = inputCollection[0];
    console.log(inputCollection);

    var content = inputDomElement.value;
    console.log(content);
}