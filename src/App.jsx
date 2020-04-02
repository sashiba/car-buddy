import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import Car from './components/car';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Car />
    </div>
  );
}

export default App;
