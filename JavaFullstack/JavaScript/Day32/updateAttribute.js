function updateMyAttribute() {
  var inputDomElement = document.querySelector("input");
  var buttonDomElement = document.querySelector("button");

  if (inputDomElement.type === "password") {
    inputDomElement.setAttribute("type", "text");
    buttonDomElement.innerHTML = "Hide Password";
  } else {
    inputDomElement.setAttribute("type", "password");
    buttonDomElement.innerHTML = "Show Password";
  }
}
function updateMycheckbox() {
  var inputDomElement = document.querySelector("input");
  var labelDomElement = document.querySelector("label");

  if (inputDomElement.type === "password") {
    inputDomElement.setAttribute("type", "text");
    labelDomElement.innerText = "UnCheck to Hide Password";
  } else {
    inputDomElement.setAttribute("type", "password");
    labelDomElement.innerText = "Check to Show Password";
  }
}
