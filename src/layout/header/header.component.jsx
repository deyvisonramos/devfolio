import React from "react";

import "./header.styles.scss";
// import img from 'assets/images/deyvison-ramos-profile.jpg';
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <Link to="/" className="logo-box__link">
          {/* <img
            src={img}
            alt="deyvison's profile"
            className="logo-box__image"
          /> */}
          <span className="logo-box__text">DeyvisonRamos</span>
        </Link>
      </div>
      <nav className="nav-menu">
        <ul className="nav-menu__list">
          <li className="nav-menu__item nav-menu__item--active">
            <NavLink to="/" className="nav-menu__link">
              Home
            </NavLink>
          </li>
          <li className="nav-menu__item">
            <NavLink to="/work" className="nav-menu__link">
              Work
            </NavLink>
          </li>
          <li className="nav-menu__item">
            <NavLink to="/about" className="nav-menu__link">
              About
            </NavLink>
          </li>
          <li className="nav-menu__item">
            <NavLink to="/contact" className="nav-menu__link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
