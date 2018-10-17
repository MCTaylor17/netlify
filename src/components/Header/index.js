import React from "react";
import MKTLR from "./MKTLR";
import NavBar from "./NavBar";

class Header extends React.Component { 
  render() {
    return (
      <header>
        <MKTLR/>
        <NavBar/>
      </header>    
    )
  }
}

export default Header;