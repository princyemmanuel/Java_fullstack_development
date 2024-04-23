function getInputValue(){
    //Get dom element of input element using QuerySelector with ID 
    var inputDomElement =document.querySelector('#name');

    // with Class value
    var inputDomElement =document.querySelector('.myClass');
    
    // with Tag name
    var inputDomElement =document.querySelector('input');

    var content = inputDomElement.value;
    console.log(content);

}