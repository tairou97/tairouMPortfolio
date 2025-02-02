import { NavLink, Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  const navBar = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Work", to: "/work" },
    { id: 3, name: "About", to: "/about" },
    { id: 4, name: "Skills", to: "/skills" },
    { id: 5, name: "Contact", to: "/contact" },
  ];

  return (
    <div className="navbar">
      <div className="navBarcontainer">
        <Link to="https://tairou-m-portfolio.vercel.app/" className="logo">
          <p className="copyrigth">©</p>
          <div className="name">
            <p className="codeby">Code by</p>
            <p className="tairou">Tairou</p>
            <p className="toure">Touré</p>
          </div>
        </Link>
        <ul>
          {navBar.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
