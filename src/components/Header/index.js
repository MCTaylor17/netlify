import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

const Header = () => (
  <header>
    <h1 className={styles.h1}>M<span className={styles.hidden}>I</span>K<span className={styles.hidden + " " + styles.gap}>E </span>T<span className={styles.hidden}>AY</span>L<span className={styles.hidden}>O</span>R</h1>
    <nav className={styles.nav}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dewordify'>Dewordify</Link></li>
        <li><Link to='/child2'>Child2</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;
