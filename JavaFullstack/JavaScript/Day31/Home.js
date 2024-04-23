function getAction() {
  var inputDomElement = document.querySelector("input");

  var paraDomElement = document.querySelector("p");

  var h2DomElement = document.querySelector("h2");

  //to display content in paragraph
  var content = inputDomElement.value;
  paraDomElement.innerHTML = content;

  //h2 style
  h2DomElement.style.color = "green";

  //para style
  paraDomElement.style.color = "white";
  paraDomElement.style.backgroundColor = "black";
  paraDomElement.style.padding = "20px";
  paraDomElement.style.fontStyle = "italic";
  paraDomElement.style.fontSize = "30px";
}
