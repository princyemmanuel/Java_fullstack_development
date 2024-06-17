import { useState } from "react";
import B from './B';
import './props.css';

function A(){
    let [state,setState] = useState("Princy");
    const textChange=(event)=>{
        setState(event.target.value);
    }

    return(
        <div className="AContainer">
            <h1 >A Component</h1>
            <input type="text" placeholder="Enter your Name" onChange={textChange}/>
            <B data={state}/>
        </div>
    )
}
export default A;