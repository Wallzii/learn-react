import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: '001', name: 'Max', age: 28 },
      { id: '002', name: 'Manu', age: 29 },
      { id: '003', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    username: 'Daniel',
    showPersons: false
  };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    // Get index of matching person:
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Retrieve immutable person state with index:
    const person = { 
      ...this.state.persons[personIndex]
    }

    // Change the name of that person:
    person.name = event.target.value;

    // Get immutable object of all persons:
    const persons = [...this.state.persons];

    // Update specific person within that new object:
    persons[personIndex] = person;

    // Apply new object as new state:
    this.setState( {persons: persons} );
  }

  usernameChangeHandler = event => {
    this.setState({
      username: event.target.value
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const card = {
      width: '40%',
      margin: '25px auto',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      padding: '15px',
      textAlign: 'left'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(e) => this.nameChangedHandler(e, person.id)} />
          })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}

        <div style={card}>
          <UserInput 
            inputValue={this.state.username}
            changed={this.usernameChangeHandler}
          />
          <UserOutput 
            username={this.state.username}
          />
        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
