import React, { Component } from 'react';
import imagen from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm";
//import Navigation from "./components/Navigation";
import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
     "todos": todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
        todos: [...this.state.todos, todo]
      }
    );
  }

  render() {
    const todos_elements = this.state.todos.map((todo, i) => {
        return(
            <div className="col-md-4">
              <div className="card mt-4">
                <div className="card-header">
                  <h3> { todo.title } </h3>
                  <span className="badge badge-pill badge-danger ml-2">
                    { todo.priority }
                  </span>
                </div>
                <div className="card-body">
                  <p> { todo.description } </p>
                  <p> <mark> { todo.responsible } </mark> </p>
                </div>
              </div>
            </div>
        );
      }
    )
    return (
      <div className="App">
        <nav className= "navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Task
            <span className="badge badge-pill badge-light ml-2">
              { this.state.todos.length }
            </span>
          </a>
        </nav>
        <div className="container"> < TodoForm onAddTodo={this.handleAddTodo}/> </div>
        <div className="container">
          <div className="row mt-4">
            { todos_elements }
          </div>
        </div>
        <img src={imagen} className="App-logo" alt="logo" />
        <p>
          Navegación <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
