import React, { Fragment, useState } from "react";

// Genral rule
// Always use
// component name must be uppercase
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  const [initialName, setName] = useState("SandyUndefined");
  const clickEvent = () => {
    if (initialName == "SandyUndefined") {
      setName("Sandeep Sharma");
    } else {
      setName("SandyUndefined");
    }
  };
  return (
    <React.Fragment>
      <h3>{initialName}</h3>
      <button type="button" className="btn" onClick={clickEvent}>
        Click here Change Name
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
