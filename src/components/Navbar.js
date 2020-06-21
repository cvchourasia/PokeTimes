import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="conatiner">
        <a className="brand-logo">Poke Times</a>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
