import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    }
    this.handleInput = this.handleInput.bind(this);//Recuerda siempre enlazar las vainas
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    console.log(e.target.value, e.target.name);
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleSubmit(e){
    e.preventDefault();//evita refrescar la pagina
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    });
    console.log(this.state);
  }

  render() {
    return(
      <div className="card">
        <form className="card-body" onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input
              type="text"
              name="title"
              value={ this.state.title }
              onChange={ this.handleInput }
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={ this.state.responsible }
              name="responsible"
              onChange={ this.handleInput }
              className="form-control"
              placeholder="Responsible"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              value={ this.state.description }
              onChange={ this.handleInput }
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <select
              name="priority"
              className="form-control"
              onChange={ this.handleInput }
            >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
