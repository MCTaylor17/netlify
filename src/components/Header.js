import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/child1'>Child1</Link></li>
        <li><Link to='/child2'>Child2</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;
