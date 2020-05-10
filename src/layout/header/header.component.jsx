import React from "react";

import './header.styles.scss';
// import img from 'assets/images/deyvison-ramos-profile.jpg';
import { Link } from "react-router-dom";

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
          <li className="nav-menu__item nav-menu__item--active"><Link to='/' className="nav-menu__link">Home</Link></li>
          <li className="nav-menu__item"><Link to='/work' className="nav-menu__link">Work</Link></li>
          <li className="nav-menu__item"><Link to='/about' className="nav-menu__link">About</Link></li>
          <li className="nav-menu__item"><Link to='/contact' className="nav-menu__link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
