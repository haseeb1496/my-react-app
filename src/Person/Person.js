import React from 'react';
import './Person.css'
//import { Component } from 'react';

const person = (props) => {

    return (
        <div className = 'Person'>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <div>
                <input placeholder= "Name" type="text" onChange={props.changeName}/>
            </div>
            <div>
                <input placeholder= "Age" type="number" onChange={props.changeAge}/>
            </div>
        </div>
    )
};

// class person extends Component{
//     render(){
//         return(
//             <div className="person">
//                 <p> I'm {this.props.name} and I'm {this.props.age} years old</p>
//                 <p>{this.props.children}</p>
//             </div>
//         )
//     }
// }

export default person;
