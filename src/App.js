import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  switched = false;

  state = {
    persons: [
        { name: 'Haseeb', age: 22, key: 0 },
        { name: 'John', age: 25, key: 1 },
        { name: 'Dani', age: 20, key: 2 }
    ],
    otherProp: 'Whatever',
      showPersons: false
  };

  switchNameHandler = (newName, age) => {

    //console.log('Was Clicked!')
      // this.state.persons[0].name = 'Doe';

      this.switched = !this.switched
      if(this.switched) {
          this.setState({
              persons: [
                  {name: newName, age: age, key: 0},
                  {name: 'John Doe', age: 25, key: 1},
                  {name: 'Dani Radi', age: 20, key: 2}
              ]
          })
          console.log('switchNameHandler() called!')
      }
      else{
          this.setState({
              persons: [
                  {name: 'Haseeb', age: 22, key: 0},
                  {name: 'John', age: 25, key: 1},
                  {name: 'Dani', age: 20, key: 2}
              ]
          })
          console.log('switchNameHandler() called!')
      }
  }

    ageChangedHandler = (event, i) => {
        const newPerson = [...this.state.persons];
        newPerson[i].age = event.target.value
        this.setState({persons: newPerson})
    }

  nameChangedHandler = (event, i) => {
      const newPerson = [...this.state.persons];
      newPerson[i].name = event.target.value
      this.setState({persons: newPerson})

      // const personIndex = this.state.persons.findIndex(person => {
      //   return person.key === i;
      // });
      // const newPerson = {...this.state.persons[personIndex]}
      // newPerson.name = event.target.value
      // const persons = [...this.state.persons]
      // persons[i] = newPerson
      // this.setState({persons: persons})

      console.log('nameChangedHandler() called!')
  };

  deletePersonHandler = index => {
      //const newPersons = this.state.persons.splice();
      const newPersons = [...this.state.persons];
      newPersons.splice(index, 1)
      this.setState({persons: newPersons})
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }

  render() {

      let persons = null

      const buttonStyle = {
          backgroundColor: 'green',
          color: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer',
      };

      if(this.state.showPersons){

        buttonStyle.backgroundColor = 'red';

        persons = (
            <div >
                {
                  this.state.persons.map((person, index) => {
                      return <Person
                          name = {person.name}
                          age = {person.age}
                          key = {person.key}
                          click = {() => this.deletePersonHandler(index)}
                          changeName = {(event) => this.nameChangedHandler(event, person.key)}
                          changeAge = {(event) => this.ageChangedHandler(event, person.key)}/>
                  })
                }
                {/*<Person*/}
                    {/*name = {this.state.persons[0].name}*/}
                    {/*age = {this.state.persons[0].age}*/}
                    {/*index = {this.state.persons[0].index}/>*/}
                {/*<Person*/}
                    {/*name = {this.state.persons[1].name}*/}
                    {/*age = {this.state.persons[1].age}*/}
                    {/*index = {this.state.persons[1].index}*/}
                    {/*click = {this.switchNameHandler.bind(this, 'Same Name', 100)}*/}
                    {/*change = {this.nameChangedHandler}>*/}
                    {/*I'm not interested*/}
                {/*</Person>*/}
                {/*<Person*/}
                    {/*name = {this.state.persons[2].name}*/}
                    {/*age = {this.state.persons[2].age}*/}
                    {/*index = {this.state.persons[2].index}/>*/}
            </div>
        )
      }

      const classes = [];

      if (this.state.persons.length <= 2){
        classes.push('red');
      }

      if (this.state.persons.length <= 1){
        classes.push('bold')
      }

    return (
      <div className="App">
       <h1>Welcome to {this.props.appName} - Author: {this.props.author}</h1>
        <p className={classes.join(' ')}>It's Working!</p>
          <div className="switchButton">
              <button
                  style = {buttonStyle}
                  onClick = {this.togglePersonHandler}>Toggle Persons</button>
          </div>
          {persons}
      </div>
    )
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Nested Create Element'))
  }
}

export default App;
