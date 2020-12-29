import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((p) => {
        return p + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h3>Simple Counter</h3>
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
      <section style={{ margin: "4rem 0" }}>
        <h3>Complex Counter</h3>
        <h2>{value}</h2>
        <button className="btn" onClick={complexIncrease}>
          +
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
