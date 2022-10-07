import React, { useState } from "react";
import "./Parent.css";
import Card from "../Card/Card";

export default function Parent() {
  const [topic, setTopic] = useState([
    { id: "For Loop", count:"1/5", src: "/imgs/LOOPS/ForLoop.jpg" },
    { id: "While Loop", count:"2/5", src: "/imgs/LOOPS/WhileLoop.jpg" },
    { id: "Do While Loop", count:"3/5", src: "/imgs/LOOPS/DoWhileLoop.jpg" },
    {
      id: "Nested Loop",
      count:"4/5", src: "/imgs/LOOPS/NestedLoop-ComparingTwoArrays.jpg",
    },
    { id: "Break Keyword", count:"5/5", src: "/imgs/LOOPS/BreakKeyword.jpg" },
  ]);

  return (
    <>
      <nav>
        <ul>
          {/* LOOPS */}
          <li
            onClick={() => {
              setTopic([
                {
                  id: "For Loop",
                  count: "1/5",
                  src: "/imgs/LOOPS/ForLoop.jpg",
                },
                {
                  id: "While Loop",
                  count: "2/5",
                  src: "/imgs/LOOPS/WhileLoop.jpg",
                },
                {
                  id: "Do While Loop",
                  count: "3/5",
                  src: "/imgs/LOOPS/DoWhileLoop.jpg",
                },
                {
                  id: "Nested Loop",
                  count: "4/5",
                  src: "/imgs/LOOPS/NestedLoop-ComparingTwoArrays.jpg",
                },
                {
                  id: "Break Keyword",
                  count: "5/5",
                  src: "/imgs/LOOPS/BreakKeyword.jpg",
                },
              ]);
            }}
          >
            Loops
          </li>
          {/* ARRAYS */}
          <li
            onClick={() => {
              setTopic([
                { id: 1, count: "1/4", src: "/imgs/ARRAYS/Arrays.jpg" },
                {
                  id: 2,
                  count: "2/4",
                  src: "/imgs/ARRAYS/ChangeArrayElementsByAssignment.jpg",
                },
                {
                  id: 3,
                  count: "3/4",
                  src: "/imgs/ARRAYS/AccesingIndexOfNestedArrays.jpg",
                },
                {
                  id: 4,
                  count: "4/4",
                  src: "/imgs/ARRAYS/NestedLoop-ComparingTwoArrays.jpg",
                },
              ]);
            }}
          >
            Arrays
          </li>
          {/* ARRAY ITERATORS */}
          <li
            onClick={() => {
              setTopic([
                {
                  id: 1,
                  count: "1/6",
                  src: "/imgs/ARRAY-ITERATORS/filter().jpg",
                },
                {
                  id: 2,
                  count: "2/6",
                  src: "/imgs/ARRAY-ITERATORS/findIndex().jpg",
                },
                {
                  id: 3,
                  count: "3/6",
                  src: "/imgs/ARRAY-ITERATORS/forEach().jpg",
                },
                {
                  id: 4,
                  count: "4/6",
                  src: "/imgs/ARRAY-ITERATORS/map().jpg",
                },
                {
                  id: 5,
                  count: "5/6",
                  src: "/imgs/ARRAY-ITERATORS/reduce().jpg",
                },
                {
                  id: 6,
                  count: "6/6",
                  src: "/imgs/ARRAY-ITERATORS/IteratorsExamples.jpg",
                },
              ]);
            }}
          >
            Array Iterators
          </li>
          {/* CONDITIONALS */}
          <li
            onClick={() => {
              setTopic([
                {
                  id: 1,
                  count: "1/5",
                  src: "/imgs/CONDITIONALS/ConditionalStatementsReview.jpg",
                },
                {
                  id: 2,
                  count: "2/5",
                  src: "/imgs/CONDITIONALS/SwitchStatement.jpg",
                },
                {
                  id: 3,
                  count: "3/5",
                  src: "/imgs/CONDITIONALS/TernaryOperator.jpg",
                },
                {
                  id: 4,
                  count: "4/5",
                  src: "/imgs/CONDITIONALS/TruthyAndFalsyStatements.jpg",
                },
                {
                  id: 5,
                  count: "5/5",
                  src: "/imgs/CONDITIONALS/Short-circuitOREvaluation.jpg",
                },
              ]);
            }}
          >
            Conditionals
          </li>
          {/* OBJECTS */}
          <li
            onClick={() => {
              setTopic([
                {
                  id: 1,
                  count: "1/13",
                  src: "/imgs/OBJECTS/ObjectsReview.jpg",
                },
                {
                  id: 2,
                  count: "2/13",
                  src: "/imgs/OBJECTS/AdvancedObjectsReview.jpg",
                },
                {
                  id: 3,
                  count: "3/13",
                  src: "/imgs/OBJECTS/LoopingThroughObjects.jpg",
                },
                {
                  id: 4,
                  count: "4/13",
                  src: "/imgs/OBJECTS/CreatingObjectLiterals.jpg",
                },
                {
                  id: 5,
                  count: "5/13",
                  src: "/imgs/OBJECTS/Destructured{}Assignment.jpg",
                },
                {
                  id: 6,
                  count: "6/13",
                  src: "/imgs/OBJECTS/Built-inMethodsLikeObject.keys().entries().assign().jpg",
                },
                {
                  id: 7,
                  count: "7/13",
                  src: "/imgs/OBJECTS/FactoryFunctions.jpg",
                },
                {
                  id: 8,
                  count: "8/13",
                  src: "/imgs/OBJECTS/ObjectsAndPrivacy.jpg",
                },
                {
                  id: 9,
                  count: "9/13",
                  src: "/imgs/OBJECTS/RefactoringKeyValueShorthand.jpg",
                },
                {
                  id: 10,
                  count: "10/13",
                  src: "/imgs/OBJECTS/Getters.jpg",
                },
                {
                  id: 11,
                  count: "11/13",
                  src: "/imgs/OBJECTS/Setters.jpg",
                },
                {
                  id: 12,
                  count: "12/13",
                  src: "/imgs/OBJECTS/thisKeyword.jpg",
                },
                {
                  id: 13,
                  count: "13/13",
                  src: "/imgs/OBJECTS/thisAndArrowFunctions.jpg",
                },
              ]);
            }}
          >
            Objects
          </li>
          {/* FUNCTIONS */}
          <li
            onClick={() => {
              setTopic([
                { id: 1, src: "/imgs/FUNCTIONS/FunctionDeclaration.jpg" },
                {
                  id: 2,
                  src: "/imgs/FUNCTIONS/FunctionExpression.jpg",
                },
                {
                  id: 3,
                  src: "/imgs/FUNCTIONS/ConciseBodyArrowFunctions.jpg",
                },
                {
                  id: 4,
                  src: "/imgs/FUNCTIONS/DefaultParameter.jpg",
                },
                {
                  id: 5,
                  src: "/imgs/FUNCTIONS/HelperFunctions.jpg",
                },
                {
                  id: 6,
                  src: "/imgs/FUNCTIONS/ReturnKeyword.jpg",
                },
              ]);
            }}
          >
            Functions
          </li>
          {/* CLASSES */}
          <li
            onClick={() => {
              setTopic([
                { id: 1, src: "/imgs/CLASSES/Classes.jpg" },
                {
                  id: 2,
                  src: "/imgs/CLASSES/Constructor.jpg",
                },
                {
                  id: 3,
                  src: "/imgs/CLASSES/ANewInstance.jpg",
                },
                {
                  id: 4,
                  src: "/imgs/CLASSES/AddingMethods.jpg",
                },
                {
                  id: 5,
                  src: "/imgs/CLASSES/CallingMethods.jpg",
                },
                {
                  id: 6,
                  src: "/imgs/CLASSES/StaticSuperclassMethod.jpg",
                },
                {
                  id: 7,
                  src: "/imgs/CLASSES/ExtendSubclassFromSuperclass.jpg",
                },
                {
                  id: 8,
                  src: "/imgs/CLASSES/ExcersiseWithDefaultParams.jpg",
                },
              ]);
            }}
          >
            Classes
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
