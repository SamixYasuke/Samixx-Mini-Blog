import style from "../Assets/Styling/nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return(
    <header id={style.header}>
      <NavLink to="/">
        <h2>Samixx Blog</h2>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/createblog">Create Blog</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </header>
  )

};

export default Nav;
