import IconLogo from "assets/icons/IconLogo"
import React from "react"
import { Link } from "react-router-dom"
import { navLinks } from "shared/links/navLinks"

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <IconLogo />
          </div>
          <nav className="header__menu menu">
            <ul className="menu__list">
              {Object.values(navLinks).map((link) => (
                <li key={link.title} className="menu__item">
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
