import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li>{this.props.name}</li>;
  }
}
export default Todo;
