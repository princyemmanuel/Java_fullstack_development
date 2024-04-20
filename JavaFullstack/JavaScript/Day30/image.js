function getReactImage(){
    var imageElementArray = document.getElementsByClassName("imageClass");

    var imageDomElement = imageElementArray[2];
    var h2DomElement = imageElementArray[1];

    h2DomElement.innerText = "React Title";
    imageDomElement.src = "https://www.krishnakantyadav.com/blog//wp-content/uploads/2022/03/ReactJS-Everything-You-Should-Know-About-It.png"
}

function getJavaImage(){

    // var imageDomElement =document.getElementById("image");
    // imageDomElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbS8sikqrdI9Vo6CZpBAvmzR8vlQYzzOKiQ&s";
    // imageDomElement.innerHTML = "Java Title";


    var imageElementArray = document.getElementsByTagName("img");
    var imageDomElement = imageElementArray[0];
    console.log(imageElementArray);
    imageDomElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbS8sikqrdI9Vo6CZpBAvmzR8vlQYzzOKiQ&s";

    var elementArray =document.getElementsByClassName("imageClass");
    console.log(elementArray);
    var h2DomElement = elementArray[1];
    h2DomElement.innerHTML = "Java Title";
  

}