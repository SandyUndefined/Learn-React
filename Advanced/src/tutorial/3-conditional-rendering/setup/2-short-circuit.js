import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Sandeep");
  const firstValue = text || "hello world"; // OR
  const secondValue = text && "hello world"; // AND
  return (
    <>
      <h1>{text || "Sandeep Sharma"}</h1>
      <h1>{text && "Hello world"}</h1>
      {/* <h1>First Value: {firstValue}</h1>
      <h1>Second Value: {secondValue}</h1> */}
    </>
  );
};

export default ShortCircuit;
