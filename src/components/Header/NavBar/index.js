import React from "react"
import { NavLink } from "react-router-dom";
import styles from "./styles.scss";

const NavBar = () => (
  <nav className={styles.nav}>
    <ul>
      <li><NavLink activeClassName={styles.active} to='/' exact>Home</NavLink></li>
      <li><NavLink activeClassName={styles.active} to='/bio'>Bio</NavLink></li>
      <li><NavLink activeClassName={styles.active} to='/faq'>FAQ</NavLink></li>
      <li><NavLink activeClassName={styles.active} to='/dewordify'>Dewordify</NavLink></li>
      <li><NavLink activeClassName={styles.active} to='/typography'>Typography</NavLink></li>
    </ul>
  </nav>
)

export default NavBar;