import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import "./NavBar.css";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navBar = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Work", to: "/work" },
    { id: 3, name: "About", to: "/about" },
    { id: 4, name: "Contact", to: "/contact" },
  ];

  return (
    <div className="navbar">
      <div className="navBarcontainer">
        <Link
          to="https://tairou-m-portfolio.vercel.app/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <p className="copyrigth">©</p>
          <div className="name">
            <p className="codeby">Code by</p>
            <p className="tairou">Tairou</p>
            <p className="toure">Touré</p>
          </div>
        </Link>
        {/* --- Burger Icon --- */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={menuOpen ? "active" : ""}>
          {navBar.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={item.to} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
