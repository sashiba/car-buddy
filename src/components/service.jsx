import React, { Component } from 'react';

const mockServices = [
  {
    id: 1,
    name: 'change oil and filters',
    date: 'new Date(27.03.2020)',
    description: 'Parts changed at 233456km',
    odometer: 233456,
    showAdditionalInfo: true
  },
  {
    id: 2,
    name: 'Replace tyres',
    date: 'new Date(27.04.2020)',
    description: 'Parts changed at 234888km',
    odometer: 234888,
    showAdditionalInfo: false
  }
];

class Service extends Component {
  state = {
    services: mockServices
  };

  handleClick = (id) => {
    const { services } = this.state;

    this.setState({
      services: services.map((s) =>
        s.id === id ? { ...s, showAdditionalInfo: !s.showAdditionalInfo } : s
      )
    });
  };

  renderService = (service) => {
    return (
      <div
        key={service.id}
        className="service-container"
        onClick={() => this.handleClick(service.id)}
      >
        <div className="service-container-item">{service.name}</div>
        {service.showAdditionalInfo && (
          <div>
            <div className="service-container-item-info">{service.date}</div>
            <div className="service-container-item-info">{service.description}</div>
            <div className="service-container-item-info">{service.odometer}</div>
          </div>
        )}
      </div>
    );
  };

  render() {
    const { services } = this.state;

    return <div>{services.map((service) => this.renderService(service))}</div>;
  }
}

export default Service;
