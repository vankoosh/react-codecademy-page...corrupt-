import React, {useState} from "react";
import "./Navbar.css";


export default function Navbar() {
  const [altAtt, setAtt] = useState("");
  
  
  // on click store alt value and set state value
  function handleClick(e)  {
    const value = e.target.getAttribute('alt');
    setAtt(value)
  }

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <a href="#" alt="loops" onClick={handleClick}>
            Loops
          </a>
        </li>
        <li className="navbar__list-item">
          <a href="#" alt="conditionals" onClick={handleClick}>
            Conditionals
          </a>
        </li>
        <li className="navbar__list-item" onClick={handleClick}>
          <a href="#" alt="iterators">
            Iterators
          </a>
        </li>
        <li className="navbar__list-item" onClick={handleClick}>
          <a href="#" alt="arrays">
            Arrays
          </a>
        </li>
        <li className="navbar__list-item" onClick={handleClick}>
          <a href="#" alt="functions">
            Functions
          </a>
        </li>
        <li className="navbar__list-item" onClick={handleClick}>
          <a href="#" alt="objects">
            Objects
          </a>
        </li>
        <li className="navbar__list-item" onClick={handleClick}>
          <a href="#" alt="classes">
            Classes
          </a>
        </li>
        <li className="navbar__list-item" onClick={handleClick}>
          <a href="#" alt="xhr">
            XHR
          </a>
        </li>
        <li className="navbar__list-item" onClick={handleClick}>
          <a href="#" alt="promises">
            Promises
          </a>
        </li>
        <li className="navbar__list-item" onClick={handleClick}>
          <a href="#" alt="async">
            Async Await
          </a>
        </li>
        <li className="navbar__list-item" onClick={handleClick}>
          <a href="#" alt="modules">
            Modules
          </a>
        </li>
      </ul>
    </nav>
  );
}
