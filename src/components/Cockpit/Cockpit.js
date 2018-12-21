import React from 'react'
import Classes from './Cockpit.css'
import Aux from '../hoc/Aux'

const cockpit = (props) => {

    let btnClass = [Classes.button]

    const classes = [];

    if (props.showPersons)
        btnClass =  [Classes.button, Classes.Red].join(' ')

    if (props.persons.length <= 2){
        classes.push(Classes.red);
    }

    if (props.persons.length <= 1){
        classes.push(Classes.bold)
    }


    return (
        <Aux>
            <h1>Welcome to {props.appName} - Author: {props.author}</h1>
            <p className={classes.join(' ')}>It's Working!</p>
            <div>
                <button
                    className={btnClass}
                    onClick = {props.click}>
                    Toggle Persons</button>
            </div>
            <div>
                <button
                    onClick = {props.toggleAuth}>
                    Login</button>
            </div>
        </Aux>
    )
}

export default cockpit;