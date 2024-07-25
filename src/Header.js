
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <h1 style={{textAlign:'left'}}>JDS</h1>
      <nav>
        <ul>
          <li className="li">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Profile'>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
