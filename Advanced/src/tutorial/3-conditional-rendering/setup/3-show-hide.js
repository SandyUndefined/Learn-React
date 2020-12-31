import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show ? <Item /> : <h2>Error</h2>}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checksize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checksize);
    // Clean-up function
    return () => {
      window.removeEventListener("resize", checksize);
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h2>Size: {size} px</h2>
    </div>
  );
};

export default ShowHide;
