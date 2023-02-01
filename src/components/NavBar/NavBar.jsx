import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link className="menuList" to="/">
        Yong Park
      </Link>
      <ul>
        <li>
          <Link className="menuList" to="/about">
            About
          </Link>
          <Link className="menuList" to="/contact">
            Contact
          </Link>
          <Link className="menuList" to="/resume">
            Resume
          </Link>
          <Link className="menuList" to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
