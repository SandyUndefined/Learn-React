import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Sandeep",
    age: 24,
    description: "Bio here",
  });
  const changeMessage = () => {
    setPerson({ ...person, description: "Insta Bio here!" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.description}</h3>
      <button className="btn" onClick={changeMessage}>
        Chnage Bio
      </button>
    </>
  );
};

export default UseStateObject;
