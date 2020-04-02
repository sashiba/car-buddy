import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import Car from './components/car';

class App extends Component {
  render() {
    return (
      <div>
        {' '}
        <NavBar />
        <Home />
        <Car />
      </div>
    );
  }
}

export default App;
