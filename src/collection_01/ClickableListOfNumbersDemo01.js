// demos clicks on a collection of elements
//, where each element can register a click
import React, { useState } from "react";

// takes an int prop and prints paras incl and upto that int
const ClickableListOfNumbersDemo01 = ({ number }) => {
  const [arrayOfNumbers, SetArrayOfNumbers] = useState([
    ...Array(number).keys()
  ]);

  // const increment = (e) => {
  //   arrayOfNumbers[e.target.innerHTML] = ++e.target.innerHTML;
  //   SetArrayOfNumbers(arrayOfNumbers);
  // };
  const increment = (index) => {
    const workingArray = [...arrayOfNumbers];
    ++workingArray[index];
    SetArrayOfNumbers(workingArray);
  };

  return (
    <div>
      Click on any number below to increase their value
      {arrayOfNumbers.map((number, index) => (
        <p key={index} onClick={() => increment(index)}>
          {number}
          {/* <button onClick={increment}>increment</button> */}
          {/* <button onClick={decrement}>decrement</button> */}
        </p>
      ))}
    </div>
  );
};

export default ClickableListOfNumbersDemo01;
