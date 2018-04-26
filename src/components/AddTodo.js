import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name="addtodo"
            onChange={this.props.handleChange}
          />
          <button type="submit">Add todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
