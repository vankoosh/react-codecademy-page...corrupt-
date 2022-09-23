import React, { useState } from "react";
import "./Parent.css";
import Card from "../Card/Card";

export default function Parent() {
  const [topic, setTopic] = useState([
    { id: "For Loop", src: "/imgs/LOOPS/ForLoop.jpg" },
    { id: "While Loop", src: "/imgs/LOOPS/WhileLoop.jpg" },
    { id: 3, src: "/imgs/LOOPS/DoWhileLoop.jpg" },
    {
      id: 4,
      src: "/imgs/LOOPS/NestedLoop-ComparingTwoArrays.jpg",
    },
    { id: 5, src: "/imgs/LOOPS/BreakKeyword.jpg" },
  ]);

  return (
    <>
      <nav>
        <ul>
          <li
            onClick={() => {
              setTopic([
                { id: "For Loop", src: "/imgs/LOOPS/ForLoop.jpg" },
                { id: 2, src: "/imgs/LOOPS/WhileLoop.jpg" },
                { id: 3, src: "/imgs/LOOPS/DoWhileLoop.jpg" },
                {
                  id: 4,
                  src: "/imgs/LOOPS/NestedLoop-ComparingTwoArrays.jpg",
                },
                { id: 5, src: "src/imgs/LOOPS/BreakKeyword.jpg" },
              ]);
            }}
          >
            Loops
          </li>
          <li
            onClick={() => {
              setTopic([
                { id: 1, src: "/imgs/ARRAYS/Arrays.jpg" },
                {
                  id: 2,
                  src: "/imgs/ARRAYS/ChangeArrayElementsByAssignment.jpg"
                },
                {
                  id: 3,
                  src: "/imgs/ARRAYS/AccesingIndexOfNestedArrays.jpg"
                },
                {
                  id: 4,
                  src: "/imgs/ARRAYS/NestedLoop-ComparingTwoArrays.jpg"
                },
              ]);
            }}
          >
            Arrays
          </li>
        </ul>
      </nav>
      <div className="card-container">
      {topic.map((img) => {
        return <Card props={img} key={img.id} />;
      })}
      </div>
    </>
  );
}
