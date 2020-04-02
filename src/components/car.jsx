import React, { Component } from 'react';

const mockCar = {
  make: 'BMW',
  model: 'E46',
  year: '2002'
};

class Car extends Component {
  state = {};
  render() {
    return (
      <main className="">
        <h4>Your car</h4>
        <h4>{mockCar.make}</h4>
        <h4>{mockCar.model}</h4>
        <h4>{mockCar.year}</h4>
      </main>
    );
  }
}

export default Car;
