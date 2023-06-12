// demos clicks on a collection of components
//, with each component having several clickable elements and a target update element
import React, { useState } from "react";

export const ClickablePara = ({ content }) => {
  const [value, SetValue] = useState(content);

  const increment = () => {
    SetValue(value + 1);
  };
  const decrement = () => {
    SetValue(value - 1);
  };
  return (
    <div>
      <button onClick={increment}>increment</button>
      <p style={{ display: "inline-block", minWidth: "100px" }}>{value}</p>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

// takes an int prop and prints components incl and upto that int
const ClickableListOfNumbersDemo03 = ({ number }) => {
  const [arrayOfNumbers] = useState([...Array(number).keys()]);
  return (
    <div>
      Click on increment/decrement buttons to increase/decrease the value
      between the buttons
      {arrayOfNumbers.map((el, index) => (
        <ClickablePara key={index} content={el} />
      ))}
    </div>
  );
};

export default ClickableListOfNumbersDemo03;
