import React, { Component } from "react";
import SayHelloWorld from "react-lib-ts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! React Web App</h1>

        <h2>
          <SayHelloWorld name={"Hui"} />
        </h2>
      </div>
    );
  }
}

export default App;
