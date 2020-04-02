import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Menu
      </a>
      <span className="badge badge-pill badge-secondary">
        <a href="/home">Home</a>
      </span>
      <span className="badge badge-pill badge-secondary">
        <a href="/car">Car</a>
      </span>
    </nav>
  );
};

export default NavBar;
