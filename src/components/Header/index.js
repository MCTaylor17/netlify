import React from "react";
import MKTLR from "./MKTLR.js";
import Navigation from "./Navigation";

class Header extends React.Component { 
  render() {
    return (
      <header>
        <MKTLR/>
        <Navigation/>
      </header>    
    )
  }
}

export default Header;