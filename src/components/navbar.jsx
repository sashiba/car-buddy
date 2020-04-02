import React, { Component } from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Menu{' '}
        <span className="badge badge-pill badge-secondary">
          <a href="/home">Home</a>
        </span>
        <span className="badge badge-pill badge-secondary">
          <a href="/car">Car</a>
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
