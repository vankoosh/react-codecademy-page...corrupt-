import React, {useState} from "react";
import "./Navbar.css";


export default function Navbar() {
  const [altAtt, setAtt] = useState("loops");

  const list = [
    {
      id: "loops",
      imgCount: 5,
      imgs: [
        "src/imgs/LOOPS/For Loop.jpg",
        "src/imgs/LOOPS/While Loop.jpg",
        "src/imgs/LOOPS/Do While Loop.jpg",
        "src/imgs/LOOPS/Nested Loop - Comparing Two Arrays.jpg",
        "src/imgs/LOOPS/Break Keyword.jpg",
      ],
    },
    {
      id: "arrays",
      imgCount: 4,
      imgs: [
        "src/imgs/ARRAYS/Arrays.jpg",
        "src/imgs/ARRAYS/Change Array Elements by Assignment.jpg",
        "src/imgs/ARRAYS/Accesing Index Of Nested Arrays.jpg",
        "src/imgs/ARRAYS/Nested Loop - Comparing Two Arrays.jpg",
      ],
    },
    {
      id: "conditionals",
      imgCount: 4,
      imgs: [
        "src/imgs/CONDITIONAL STATEMENTS/Conditional Statements Review.jpg",
        "src/imgs/CONDITIONAL STATEMENTS/Short-circuit OR Evaluation.jpg",
        "src/imgs/CONDITIONAL STATEMENTS/Switch Statement.jpg",
        "src/imgs/CONDITIONAL STATEMENTS/Ternary Operator.jpg",
        "src/imgs/CONDITIONAL STATEMENTS/Truthy and Falsy Statements.jpg",
      ],
    },
  ];
  
  // on click store alt value and set state value
  function handleClick(e)  {
    const value = e.target.getAttribute('alt');
    setAtt(value);

  }
 
  
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  return (
    <>
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

      <div>
      {data.map((user) => (
        <div>{user}</div>
      ))}
      </div>
      
      <section className="card-section">        
    </section>
    </>
  );
}
