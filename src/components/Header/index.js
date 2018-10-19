import React from "react";
import MKTLR from "./MKTLR";
import NavBar from "./NavBar";
import styles from "./styles.scss";

class Header extends React.Component { 
  render() {
    return (
      <header className={styles.header}>
        <MKTLR/>
        <NavBar/>
      </header>    
    )
  }
}

export default Header;