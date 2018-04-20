import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props); // super is a function that calls Component (the parent class)
    this.state = {
      todos: ['study', 'sleep', 'eat']
    };
  }
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        {this.state.todos.map((value, index) => {
          return <Todo key={index} name={value} />;
        })}
      </div>
    );
  }
}

export default TodoList;
