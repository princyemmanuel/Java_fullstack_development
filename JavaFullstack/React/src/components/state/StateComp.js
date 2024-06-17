import './StateComp.css';
import {useState} from 'react';

function StateComp(){

    let [state,setState]= useState("Princy");

    function UpdateState(){
        setState("Joseph");
    }

    return(
        <div className='stateContainer'>
            <h2>State Component : {state} </h2>
            <button onClick={UpdateState}>Change Name</button>
        </div>
    )
}
export default StateComp;