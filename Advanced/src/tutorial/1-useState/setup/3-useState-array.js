import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const deleteItem = (id) => {
    let newNames = people.filter((p) => p.id !== id);
    setPeople(newNames);
  };
  return (
    <>
      {people.map((p) => {
        const { id, name } = p;
        return (
          <div key={id} className="item">
            <h3>{name}</h3>
            <button className="btn" onClick={() => deleteItem(id)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
