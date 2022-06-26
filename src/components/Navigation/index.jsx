import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <ul className="navbar-nav">
          <NavLink
            to={`/`}
            className={(nav) => (nav.isActive ? 'nav-item active' : 'nav-item')}
          >
            <li className="nav-item">Accueil</li>
          </NavLink>
          <NavLink
            to={`/employees`}
            className={(nav) => (nav.isActive ? 'nav-item active' : 'nav-item')}
          >
            <li className="nav-item">Employees</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
