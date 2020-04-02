import React, { Component } from 'react';
import Service from './service';

const mockCar = {
  make: 'BMW',
  model: 'E46',
  year: '2002',
  odometer: 243000
};

class Car extends Component {
  state = {};

  render() {
    return (
      <div>
        <h4>Your car</h4>
        <div className="car-container">
          <div className="car-container-item">{mockCar.make}</div>
          <div className="car-container-item">{mockCar.model}</div>
          <div className="car-container-item">{mockCar.year}</div>
          <div className="car-container-item">{mockCar.odometer}</div>
        </div>
        <Service />
      </div>
    );
  }
}

export default Car;
