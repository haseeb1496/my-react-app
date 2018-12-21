import React from 'react';
import Person from "./Person/Person";

const persons = (props) => props.persons.map((person, index) => {
        return <Person
            name = {person.name}
            age = {person.age}
            key = {person.key}
            position = {index}
            clicked = {() => props.clicked(index)}
            changeName = {(event) => props.changeName(event, person.key)}
            changeAge = {(event) => props.changeAge(event, person.key)}/>
    })

export default persons;