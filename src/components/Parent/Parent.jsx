import React, {useState} from 'react';
import Card from "../Card/Card";


export default function Parent() {

  const [topic, setTopic] = useState({});

  
  return (
    <>
      <nav>
        <ul>
          <li
            onClick={() => {
              setTopic({
                id: "loops",
                imgCount: 5,
                imgs: [
                  "src/imgs/LOOPS/For Loop.jpg",
                  "src/imgs/LOOPS/While Loop.jpg",
                  "src/imgs/LOOPS/Do While Loop.jpg",
                  "src/imgs/LOOPS/Nested Loop - Comparing Two Arrays.jpg",
                  "src/imgs/LOOPS/Break Keyword.jpg",
                ],
              });
            }}
          >
            Loops
          </li>
          <li
            onClick={() => {
              setTopic({
                id: "arrays",
                imgCount: 4,
                imgs: [
                  "src/imgs/ARRAYS/Arrays.jpg",
                  "src/imgs/ARRAYS/Change Array Elements by Assignment.jpg",
                  "src/imgs/ARRAYS/Accesing Index Of Nested Arrays.jpg",
                  "src/imgs/ARRAYS/Nested Loop - Comparing Two Arrays.jpg",
                ],
              });
            }}
          >
            Arrays
          </li>
        </ul>
      </nav>
      {topic.imgs.forEach(img => {
        return (
          <Card props={topic} />
        )
      })}
    </>
  );
}
