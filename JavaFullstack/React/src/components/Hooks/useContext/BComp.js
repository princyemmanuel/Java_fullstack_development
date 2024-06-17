import CComp from "./CComp";
import { useContext } from "react";
import myContext from "./mycontext";

function BComp(){

    let contextData = useContext(myContext);
    return(
        <div className="BContainer">
            <h1>B Component</h1>
            <p> New : {contextData}</p>
            <CComp/>
        </div>
    )
}
export default BComp;