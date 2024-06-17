import { useContext } from "react";
import myContext from "./mycontext";

function DComp(){

    let contextData = useContext(myContext);
    return(
        <div className="DContainer">
            <h1>D Component</h1>
            <p>My Context data : {contextData}</p>
        </div>
    )
}
export default DComp;