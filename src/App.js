import React, { Component } from "react";
import "./App.css";
import { Button } from "./components";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Hello</h1>
        <Button className="qwe"> Кнопка </Button>
      </div>
    );
  }
}

export default App;
