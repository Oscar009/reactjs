/* eslint-disable no-undef */
import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/tasks.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//Components
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import Posts from "./components/Posts";

//console.log(tasks);

class App extends Component {
  state = {
    tasks: tasks,
  };

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
    };
    console.log(newTask);
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    //console.log(newTasks);
    this.setState({ tasks: newTasks });
  };

  checkDone = (id) => {
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/posts">Posts</Link>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <TaskForm addTask={this.addTask} />
                  <Tasks
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    checkDone={this.checkDone}
                  />
                </div>
              );
            }}
          ></Route>
          <Route path="/posts" component={Posts}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
