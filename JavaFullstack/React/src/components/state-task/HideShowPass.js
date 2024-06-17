import './HideShow.css'
import { useCallback, useState } from "react";

function HideShowPass(){
    
    let [state,setState] = useState("text");

    function showPassword(){
        setState("text");
    }

    function hidePassword(){
        setState("password");
    }

    return (
        <div className='showHide'>
            <input type={state}/>
            <br></br>
            <input type="radio" name="content" onChange={showPassword}/> Show Password
            <input type="radio" name="content" onChange={hidePassword} /> Hide Password
        </div>
    )
}
export default HideShowPass;