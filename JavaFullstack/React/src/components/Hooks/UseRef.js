import { useRef } from "react";

function UseRef(){
    let h1Ref = useRef();
    let pRef =useRef();

    const changeContent=()=>{
        // h1Ref.current == document.getElementById("")

        h1Ref.current.innerText ="Content Changed";
        h1Ref.current.style.color ="red";
        pRef.current.style.backgroundColor ="green";
        pRef.current.style.color ="white";
        pRef.current.style.padding ="20px";

        //using js
        var btnRef = document.getElementById("btn");
        btnRef.innerHTML = "Login";
        
    }

    return(
    <div>
        <h1 ref={h1Ref}>Use ref Concept</h1>
        <p ref={pRef}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button id="btn" onClick={changeContent}>Change Content</button>
    </div>
 )
}
export default UseRef;