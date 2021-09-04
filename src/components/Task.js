import React, { Component } from "react";
import "./Tasks.css";
import PropTypes from 'prop-types';

class Task extends Component {

  StyleCompleted(){
    return{
      fonrSize: '20px',
      color: this.props.task.done ? 'gray' : 'black',
      textDecoration: this.props.task.done ? 'none' : 'line-throug' 
    }
  }

  render() {
    const { task } = this.props;
    return (
      <div style={this.StyleCompleted()}>
        {task.title} - {task.description} - {task.done} - {task.id}
        <input type="checkbox" />
        <button style={btnDelete}>x</button>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

const btnDelete = {
  fontSize: '18px',
  background: '#ea2027',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
};

export default Task;
