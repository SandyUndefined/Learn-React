import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Sandeep");
  const [iserror, setIsError] = useState(false);
  return (
    <>
      <h1>{text || "Sandeep Sharma"}</h1>
      <button className="btn" onClick={() => setIsError(!iserror)}>
        Toggel Error
      </button>
      {iserror && <h1>Error...</h1>}
      {iserror ? (
        <p>This is Error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
