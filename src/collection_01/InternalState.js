import React from "react";

/*
The component below is not working correctly.
 
This component expected behavior is quite simple :
It takes a function getNewResult as single prop, this function returns a string
The component displays a button with id="button" that calls getNewResult on click
The returned string must be displayed next to the button in a span with id="result"
The span with id="result" should not be displayed until the button has been pressed.
 
Please fix this component.
*/

function InternalState({ getNewResult }) {
  let result = null;

  function handleClick() {
    result = getNewResult();
  }

  return (
    <div>
      <button id="button" onClick={handleClick}>
        Click
      </button>
      {result != null && <span id="result">{result}</span>}
    </div>
  );
}

// called as sample below
// <InternalState getNewResult={() => "test"} />

export default InternalState;
