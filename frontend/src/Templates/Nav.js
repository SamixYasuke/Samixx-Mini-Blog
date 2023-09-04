import style from "../Assets/Styling/nav.module.css";

const Nav = () => {
  return(
    <header id={style.header}>
      <a href="/">
        <h2>Samixx Blog</h2>
      </a>
      <ul>
        <li>
          <a href="/createblog">Create Blog</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </header>
  )

};

export default Nav;
