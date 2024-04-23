function colorChangetoGreen(){

    var divDomElement = document.getElementById('card');
    var h2DomElement = document.querySelector('h2');

    console.log(h2DomElement)
    divDomElement.classList.remove('cardRed');
    divDomElement.classList.add('cardGreen');

    h2DomElement.classList.remove("red");
    h2DomElement.classList.add("green");
}
function colorChangetoRed(){
    var divDomElement = document.getElementById('card');
    var h2DomElement = document.getElementsByTagName('h2');

    console.log(h2DomElement)
    divDomElement.classList.remove('cardGreen');
    divDomElement.classList.add('cardRed');

    h2DomElement.classList.remove("green");
    h2DomElement.classList.add("red");
}