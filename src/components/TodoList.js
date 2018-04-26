import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class TodoList extends Component {
  constructor(props) {
    super(props); // super is a function that calls Component (the parent class)
    this.state = {
      todos: ['study', 'sleep', 'eat'],
      newTodo: ''
    };
  }
  handleChange(e) {
    this.setState({ newTodo: e.target.value });
  }
  /* define handleSubmit method here */
  handleSubmit(e) {
    e.preventDefault();
    const newTodo = this.state.newTodo;
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodo: ''
    });
  }
  render() {
    return (
      <div>
        <AddTodo
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <h1>TodoList</h1>
        {this.state.todos.map((value, index) => {
          return <Todo key={index} name={value} />;
        })}
      </div>
    );
  }
}

export default TodoList;
