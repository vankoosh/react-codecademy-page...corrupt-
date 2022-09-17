import React from 'react';
import Navbar from "../Navbar/Navbar";
import Front from "../Front/Front";


export default function Parent() {

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

  return (
    <>
      <Navbar />
      <Front />
    </>
  );
}
