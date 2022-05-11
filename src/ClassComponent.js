import React, {Component} from "react";
export default class ClassComponent extends Component{
    render(){
        return(
            <div className='container' id="component">
                <h1>Component</h1>
                <p>External Css</p>
                <p style={{color:'red'}}>Inline Css</p>
                
            </div>
        )
    
    }
}