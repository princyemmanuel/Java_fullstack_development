function removeMyAttribute(){
    var inputDomElement = document.querySelector('input');
    var h2DomElement = document.querySelector('h2');

    inputDomElement.removeAttribute("id");
    inputDomElement.removeAttribute("placeholder");

    h2DomElement.removeAttribute("class");

}