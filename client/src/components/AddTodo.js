import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";

export default class AddTodo extends Component {
  state = {
    id: 4,
    title: "",
    complete: false,
  };

  update = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  add = (dispatch, e) => {
    e.preventDefault();
    const newTodo = this.state;

    axios
      .post("/todos", newTodo)
      .then((res) => dispatch({ type: "ADD", payload: res.data }));

    this.setState({ title: "" });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <form onSubmit={this.add.bind(this, dispatch)}>
              <input
                type="text"
                className="form-contol w-100"
                placeholder="Write some todo"
                onChange={this.update}
                value={this.state.title}
              />
              <button
                className="form-contol w-100 btn-secondary "
                type="submit"
              >
                Add Todo
              </button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}
