import React, { useState } from "react";

export const Parent = () => {
  const workingArray = ["a", "b", "c", "d"];
  const [currentIndex, SetCurrentIndex] = useState(0);
  const increment = () => {
    SetCurrentIndex(currentIndex + 1);
  };
  const decrement = () => {
    SetCurrentIndex(currentIndex - 1);
  };
  return (
    <div>
      <Child
        workingArray={workingArray}
        currentIndex={currentIndex}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
};

export const Child = ({ workingArray, currentIndex, increment, decrement }) => {
  return (
    <div>
      <GrandChild
        workingArray={workingArray}
        currentIndex={currentIndex}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
};

export const GrandChild = ({
  workingArray,
  currentIndex,
  increment,
  decrement
}) => {
  return (
    <>
      <div>
        <button onClick={increment}>
          {" "}
          {`move forward by 1: 
            currentIndex: ${currentIndex} 
            currentArray sliced from currentIndex: ${workingArray.slice(
              currentIndex
            )}`}
        </button>
      </div>
      <p></p>
      <div>
        <button onClick={decrement}>
          {" "}
          {`move backward by 1: 
            currentIndex:  ${currentIndex}  
            currentArray sliced from currentIndex:  ${workingArray.slice(
              currentIndex
            )}`}{" "}
        </button>
      </div>
    </>
  );
};
