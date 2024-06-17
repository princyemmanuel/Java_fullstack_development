import {Component, component} from 'react';

class ClassComp extends Component{
  
    constructor(){
        super();
        this.state = {
            name: "Jesus",
        };
    }
    render(){
        return(
            <div>
                <h1>Christian Saints</h1>
                <h3>{this.state.name}</h3>
                <ul>
                    <li>Mother Mary</li>
                    <li>St Joseph</li>
                    <li>St Antony</li>
                    <li>St Alponsa</li>
                </ul>
            </div>
        )
    }
}
export default ClassComp