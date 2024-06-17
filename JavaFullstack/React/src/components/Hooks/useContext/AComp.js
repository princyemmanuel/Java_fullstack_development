import BComp from "./BComp";
import myContext from "./mycontext";
import { useState } from "react";

function AComp(){
    const [state,setState] = useState("Princy");

    const textChange =(event)=>{
        setState(event.target.value);
    }
    return(
        <div className="AContainer">
            <h1>A Component</h1>
            <input type="text" placeholder="Enter your Name" onChange={textChange}/>
            <myContext.Provider value={state}> 
                <BComp/>
            </myContext.Provider>
           
        </div>
    )
}
export default AComp;