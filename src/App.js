import React from "react";
import "./App.css";

function HelloWorld(props) {
  console.log(props);
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
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
