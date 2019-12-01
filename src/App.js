import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home.jsx";
import Car from "./components/car.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {" "}
        <NavBar />
        <Home />
        <Car />
      </React.Fragment>
    );
  }
}

export default App;
