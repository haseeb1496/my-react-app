import React, { PureComponent } from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../components/hoc/WithClass'
import Aux from '../components/hoc/Aux'

export const AuthContext = React.createContext(false)

class App extends PureComponent {

  state = {
    persons: [
        { name: 'Haseeb', age: 22, key: 0 },
        { name: 'John', age: 25, key: 1 },
        { name: 'Dani', age: 20, key: 2 }
    ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
  };


  ageChangedHandler = (event, i) => {
      const newPerson = [...this.state.persons];
      newPerson[i].age = event.target.value
      this.setState({persons: newPerson})
  }

  nameChangedHandler = (event, i) => {
      const newPerson = [...this.state.persons];
      newPerson[i].name = event.target.value
      this.setState({persons: newPerson})

      console.log('nameChangedHandler() called!')
  };

  deletePersonHandler = index => {
      const newPersons = [...this.state.persons];
      newPersons.splice(index, 1)
      this.setState({persons: newPersons})
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState((prevState) => {
          return {
              showPersons: !doesShow,
              toggleClicked: prevState.toggleClicked + 1
          }
      })
  }

  toggleAuthenticated = () => {
      const newAuth = this.state.authenticated
      this.setState({authenticated: !newAuth})
  }

  render() {

      let persons = null

      if(this.state.showPersons){
        persons = <Persons
                    persons = {this.state.persons}
                    clicked = {this.deletePersonHandler}
                    changeName = {this.nameChangedHandler}
                    changeAge = {this.ageChangedHandler}/>
      }

    return (
      <Aux>
          <Cockpit
              appName = {this.props.appName}
              author = {this.props.author}
              showPersons = {this.state.showPersons}
              persons = {this.state.persons}
              toggleAuth = {this.toggleAuthenticated}
              click = {this.togglePersonHandler}/>
          <AuthContext.Provider value = {this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </Aux>
    )
  }
}

export default WithClass(App, Classes.App);
