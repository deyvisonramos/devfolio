import React from "react";

import './header.styles.scss';
import img from 'assets/images/deyvison-ramos-profile.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <a href="/" className="logo-box__link">
          <img
            src={img}
            alt="deyvison's profile"
            className="logo-box__image"
          />
          <span className="logo-box__text">deyvisonRamos</span>
        </a>
      </div>
      <nav className="nav-menu">
        <ul className="nav-menu__list">
          <li className="nav-menu__item nav-menu__item--active"><a href="#" className="nav-menu__link">Home</a></li>
          <li className="nav-menu__item"><a href="#" className="nav-menu__link">Work</a></li>
          <li className="nav-menu__item"><a href="#" className="nav-menu__link">About</a></li>
          <li className="nav-menu__item"><a href="#" className="nav-menu__link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
