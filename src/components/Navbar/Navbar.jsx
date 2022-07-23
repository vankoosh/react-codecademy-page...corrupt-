import React from "react";
import "./Navbar.css";


export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <a href="#">Loops</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Conditionals</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Iterators</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Array</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Functions</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Objects</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Classes</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">XHR</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Promises</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Async Await</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Modules</a>
        </li>
      </ul>
    </nav>
  );
}
