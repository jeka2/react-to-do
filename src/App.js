import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    todos: [
      { description: 'Walk the cat', isComplete: true},
      { description: 'Throw the dishes away', isComplete: false},
      { description: 'Buy new dishes', isComplete: false},
    ]
   };
 }
  render() {
    return (
      <div className="App">
       <ul>
        {this.state.todos.map((todo, index) =>
          <ToDo key={ index } description={ todo.description } isComplete={ todo.isComplete } />
        )}
       </ul>
      </div>
    );
  }
}

export default App;
