import React, { Component } from "react";

export default class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  }

  onSubmit = e => {
    this.props.addTask(this.state.title, this.state.description);
    e.preventDefault();
    //console.log(this.state);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      //<form> onSubmit={this.onSubmit.bind(this)}>
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write a Task"
          onChange={this.onChange}
          value={this.state.title}
        ></input>
        <br />
        <br />
        <textarea
          name="description"
          placeholder="Write a description"
          onChange={this.onChange}
          value={this.state.description}
        ></textarea>
        <button type="submit">Save Task</button>
      </form>
    );
  }
}
