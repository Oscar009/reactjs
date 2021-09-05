/* eslint-disable no-undef */
import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/tasks.json";
//Components
import TaskForm from './components/TaskForm';
import Tasks from "./components/Tasks";

console.log(tasks);

class App extends Component {
  state = {
    tasks: tasks,
  };
  render() {
    return (
      <div>
        <TaskForm/>
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
