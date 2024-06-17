import './Stateimg.css';
import { useState } from "react";

function StateImg(){
    let [state,setState] = useState("https://th.bing.com/th/id/OIP.ppS9EIdk8Ud11l2UHdXIfwHaEO?rs=1&pid=ImgDetMain");

    function reactImage(){
        setState("https://th.bing.com/th/id/OIP.ppS9EIdk8Ud11l2UHdXIfwHaEO?rs=1&pid=ImgDetMain");
    }
    function javascriptImage(){
        setState("https://th.bing.com/th/id/OIP.ZEu_2nVjitpB-jhLRgfn4AHaEK?w=302&h=180&c=7&r=0&o=5&dpr=2&pid=1.7");
    }
    return(
        <div className="stateImg">
            <img src={state}/>
            <br></br>
            <input type="radio" name="img" onChange={reactImage}/>React Image
            <input type="radio" name="img" onChange={javascriptImage}/>JavaScript Image
        </div>
    )
}
export default StateImg;