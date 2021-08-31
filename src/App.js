/* eslint-disable no-undef */
import React from "react";
import "./App.css";

/* function HelloWorld(props) {
  console.log(props);
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
} */

class HelloWorld extends React.Component {
  state = {
    show: true
  }
  toggleShow = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    if(this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          {/* <button onClick={() => this.setState({show:false})}>Toggle show</button> */}
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    }
    else{
      return (
        <div id="hello">
          <h3>No hay elementos</h3>
          {/* <button onClick={this.toggleShow.bind(this)}>Toggle show</button> */}
          <button onClick={this.toggleShow}>Toggle show1</button>
        </div>
      )
    }
  }
}

//const App = () => <div>This is my component: <HelloWorld/></div>

/* class App extends React.Component {
  render(){
    return <div>This is my component: <HelloWorld/></div>
  }
}
 */

function App() {
  return (
    <div>
      This is my component:{" "}
      <HelloWorld mytext="Hello Oscar" subtitle="Subtitle1" />{" "}
      <HelloWorld mytext="Hola Mundo" subtitle="Subtitle2" />{" "}
      <HelloWorld mytext="Hello!" subtitle="Subtitle3" />
    </div>
  );
}

export default App;
