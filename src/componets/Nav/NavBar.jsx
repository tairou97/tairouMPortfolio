import { NavLink } from "react-router-dom";
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
  );
};

export default NavBar;
