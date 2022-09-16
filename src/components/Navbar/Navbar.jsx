import React from "react";
import "./Navbar.css";


export default function Navbar() {


  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <a href="#" alt="loops" >Loops</a>
        </li>
        <li className="navbar__list-item">
          <a href="#" alt="conditionals" >Conditionals</a>
        </li>
        <li className="navbar__list-item">
          <a href="#" alt="iterators" >Iterators</a>
        </li>
        <li className="navbar__list-item">
          <a href="#" alt="arrays" >Arrays</a>
        </li>
        <li className="navbar__list-item">
          <a href="#" alt="functions" >Functions</a>
        </li>
        <li className="navbar__list-item">
          <a href="#" alt="objects" >Objects</a>
        </li>
        <li className="navbar__list-item">
          <a href="#" alt="classes" >Classes</a>
        </li>
        <li className="navbar__list-item">
          <a href="#" alt="xhr" >XHR</a>
        </li>
        <li className="navbar__list-item">
          <a href="#" alt="promises" >Promises</a>
        </li>
        <li className="navbar__list-item">
          <a href="#" alt="async" >Async Await</a>
        </li>
        <li className="navbar__list-item">
          <a href="#" alt="modules" >Modules</a>
        </li>
      </ul>
    </nav>
  );
}
