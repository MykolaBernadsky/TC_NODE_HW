import Todo from "./Todo";
import React, { Component } from "react";

import { Consumer } from "../context";

export default class Todos extends Component {

  render() {
    return (
      <Consumer>
        {(value) => {
          const { todos } = value;
          return todos.map((item) => <Todo todo={item} key={item.id} />);
        }}
      </Consumer>
    );
  }
}
