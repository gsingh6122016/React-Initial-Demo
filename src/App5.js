import React, { Component } from 'react';
import logo from './logo.svg';
import classess from './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium' ;

// to out put conditional content
//this is beeter way then App3

class App extends Component {

  state = {
    persons : [
      {id : "1", name : "max", age : 15},
      {id : "2", name : "Ives", age : 23},
      {id : "3", name : "elizabeth", age : 21} 
    ],
    otherState : "this will not be changed by the set state function, i.e it remains as it is.",
    ShowPersons : false
  }

  TogglePersonHandler = () => {
    const CheckState = this.state.ShowPersons;
    this.setState({ShowPersons : !CheckState});
    
  }

  DeletePersonHandler = (PersonIndex) => {
      //to copy persons array into new variable
      const persons = [...this.state.persons];
      //or u can do
    // const persons = this.state.persons.slice();
    persons.splice(PersonIndex, 1);
    this.setState( {persons : persons} )
  }

  nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id ;
      });

      const person = {
          ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;
      
      this.setState({
        persons:persons
      })
  }

  render() {
    
    // const StyledButton = styled.button`
    // background-color:${props => props .alt ? 'red':'green'};
    //   color: white;
    //   font: inherit;
    //   border: 1px solid black;
    //   padding: 8px;
    //   cursor: pointer;
    //   &:hover {
    //     background-color:${props => props .alt ? 'crimson':'lightgreen'};
    //     color: black;
    // `;

    // const Style = {
    //   //these values are stored as strings
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid black',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor:'lightgreen',
    //     color: 'black'
    //   }
    // }

    let PersonsToToggle = null;
    
    let btnClass = [classess.Button]

    if(this.state.ShowPersons)
       {
           PersonsToToggle = (
        
            <div>
                {this.state.persons.map( (person, index) => {
                    return <Person
                    name = {person.name}
                    age = {person.age}
                    key = {person.id}
                    click = {() => this.DeletePersonHandler(index)}
                    change = {(event) => this.nameChangeHandler(event, person.id)}
                    ></Person>
                })}
            </div>
            
          );

          btnClass.push(classess.Red);
  
          // Style.backgroundColor = 'red';
          // Style[':hover'] = {
          //   backgroundColor: 'blue',
          //   color: 'black'
          // };
  }

        const classes = [];
        if (this.state.persons.length <= 2)
        {
          classes.push(classess.red);
        }
        if (this.state.persons.length <= 1)
        {
          classes.push(classes.bold);
        }

    return (
  
      <div className={classess.App}>
        <h1>hi, this is my react app.</h1>
        <p className = {classes.join(' ')}>This resally works.</p>
        <button
          // style={Style}
          // className={classess.Button}
          className={btnClass.join(' ')}
          alt = {this.state.ShowPersons}
          onClick = {this.TogglePersonHandler} >Toggle Persons
          </button>

          {PersonsToToggle}
        
      </div>
      
    );
  }
}
export default App;
// export default Radium(App);
