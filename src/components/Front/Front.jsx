import React from "react";
import "./Front.css";

export default function Front() {
  const list = [
    {
      id: "Loops",
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
      id: "Arrays",
      imgCount: 4,
      imgs: [
        "src/imgs/ARRAYS/Arrays.jpg",
        "src/imgs/ARRAYS/Change Array Elements by Assignment.jpg",
        "src/imgs/ARRAYS/Accesing Index Of Nested Arrays.jpg",
        "src/imgs/ARRAYS/Nested Loop - Comparing Two Arrays.jpg",
      ],
    },
    {
      id: "Conditionals",
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

  const container = document.querySelector(".front-container");
  const menuLinks = document.querySelectorAll(".navbar__list-item");
  console.log(menuLinks)
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(link)
    })
})

const onclick = (e) => {
  if (e.target.value === "blue") {
    
  };
}
  return (
    <section className="front-container">
      
    </section>
  );
}
