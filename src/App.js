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
    ],
    newToDoDescription: ''
   };
 }

handleChange(e) {
  this.setState({ newToDoDescription: e.target.value })
}

handleSubmit(e) {
  e.preventDefault();
  if (!this.state.newToDoDescription) {return}
  const newTodo = { description: this.state.newToDoDescription, isComplete: false};
  this.setState({ todos: [...this.state.todos, newTodo], newToDoDescription: ''});
}

deleteToDo(index) {
  console.log("I work")
 //  const todos = this.state.todos.slice();
 //  const del = todos[index].description;
 //  for(let i = 0; i < this.state.todos.length; i++) {
 //  if(this.state.description === del) {
 //    todos[i].pop();
 //  }
 // }
 // this.setState({ todos: todos });
}

 toggleComplete(index) {
   const todos = this.state.todos.slice();
   const todo = todos[index];
   todo.isComplete =  todo.isComplete ? false : true;
   this.setState({ todos: todos });
 }

  render() {
    return (
      <div className="App">
       <ul>
        {this.state.todos.map((todo, index) =>
          <ToDo key={ index } description={ todo.description } isComplete={ todo.isComplete } toggleComplete={ () => this.toggleComplete(index)}/>
        )}
       </ul>
       <form onSubmit={ (e) => this.handleSubmit(e) }>
        <input type="text" value={ this.state.newToDoDescription } onChange={ (e) => this.handleChange(e) }/>
        <input type="submit" />
       </form>
      </div>
    );
  }
}

export default App;
