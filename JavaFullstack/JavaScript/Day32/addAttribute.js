function addAttribute(){
    var inputDomElement = document.querySelector('input');
    var h2DomElement = document.querySelector('h2');
    
    //adding attribute to input
    inputDomElement.setAttribute("id","username");
    inputDomElement.setAttribute("placeholder","Enter Name");
    inputDomElement.setAttribute("class","myClass");

    //adding attribute to heading
    h2DomElement.setAttribute("class","heading");

}