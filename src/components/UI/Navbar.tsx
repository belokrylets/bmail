import IconLogo from "assets/icons/IconLogo";
import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "shared/links/navLinks";
import Burger from "./Burger/Burger";

const Navbar = () => {
  return (
    <header className="header ">
      <div className="header__content container">
        <div className={"header-burger"}>
          <Burger />
        </div>
        <div className="header-logo">
          <IconLogo />
        </div>
        <nav className="header-menu menu">
          <ul className="menu__list">
            {Object.values(navLinks).map((link) => (
              <li key={link.title} className="menu__item">
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
