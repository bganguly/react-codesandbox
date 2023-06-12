import React, { useState } from "react";

const InternalStateDemo = ({ getNewResult }) => {
  const [result, SetResult] = useState(null);

  const handleClick = () => {
    SetResult(getNewResult());
  };

  return (
    <div>
      <button id="button" onClick={handleClick}>
        Click Me!
      </button>
      {result != null && <span id="result">{result}</span>}
    </div>
  );
};

export default InternalStateDemo;
