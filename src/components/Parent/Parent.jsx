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
          {/* LOOPS */}
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
          {/* ARRAYS */}
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
          {/* ARRAY ITERATORS */}
          <li
            onClick={() => {
              setTopic([
                { id: 1, src: "/imgs/ARRAY-ITERATORS/filter().jpg" },
                {
                  id: 2,
                  src: "/imgs/ARRAY-ITERATORS/findIndex().jpg",
                },
                {
                  id: 3,
                  src: "/imgs/ARRAY-ITERATORS/forEach().jpg",
                },
                {
                  id: 4,
                  src: "/imgs/ARRAY-ITERATORS/map().jpg",
                },
                {
                  id: 5,
                  src: "/imgs/ARRAY-ITERATORS/reduce().jpg",
                },
                {
                  id: 6,
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
                  src: "/imgs/CONDITIONALS/ConditionalStatementsReview.jpg",
                },
                {
                  id: 2,
                  src: "/imgs/CONDITIONALS/SwitchStatement.jpg",
                },
                {
                  id: 3,
                  src: "/imgs/CONDITIONALS/TernaryOperator.jpg",
                },
                {
                  id: 4,
                  src: "/imgs/CONDITIONALS/TruthyAndFalsyStatements.jpg",
                },
                {
                  id: 5,
                  src: "/imgs/CONDITIONALS/Short-circuitOREvaluation.jpg",
                },
              ]);
            }}
          >
            CONDITIONALS
          </li>
          {/* OBJECTS */}
          <li
            onClick={() => {
              setTopic([
                { id: 1, src: "/imgs/OBJECTS/ObjectsReview.jpg" },
                {
                  id: 2,
                  src: "/imgs/OBJECTS/AdvancedObjectsReview.jpg",
                },
                {
                  id: 3,
                  src: "/imgs/OBJECTS/LoopingThroughObjects.jpg",
                },
                {
                  id: 4,
                  src: "/imgs/OBJECTS/CreatingObjectLiterals.jpg",
                },
                {
                  id: 5,
                  src: "/imgs/OBJECTS/Destructured{}Assignment.jpg",
                },
                {
                  id: 6,
                  src: "/imgs/OBJECTS/Built-inMethodsLikeObject.keys().entries().assign().jpg",
                },
                {
                  id: 7,
                  src: "/imgs/OBJECTS/FactoryFunctions.jpg",
                },
                {
                  id: 8,
                  src: "/imgs/OBJECTS/ObjectsAndPrivacy.jpg",
                },
                {
                  id: 9,
                  src: "/imgs/OBJECTS/RefactoringKeyValueShorthand.jpg",
                },
                {
                  id: 10,
                  src: "/imgs/OBJECTS/Getters.jpg",
                },
                {
                  id: 11,
                  src: "/imgs/OBJECTS/Setters.jpg",
                },
                {
                  id: 12,
                  src: "/imgs/OBJECTS/thisKeyword.jpg",
                },
                {
                  id: 13,
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
        </ul>
      </nav>
      <div className="card-container">
        <p>Hello</p>
      {topic.map((img) => {
        return <Card props={img} key={img.id} />;
      })}
      </div>
    </>
  );
}
