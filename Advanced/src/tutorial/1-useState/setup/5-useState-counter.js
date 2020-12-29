import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h3>Counter</h3>
        <h2>{value}</h2>
        <button className="btn" onClick={() => setValue(value - 1)}>
          -
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          +
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
