import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setname] = useState("");
  const [people, setPeople] = useState(data);
  const [modal, setModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setname("");
    } else {
      setModal(true);
    }
  };
  return (
    <>
      {modal && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <button type="submit">Add </button>
      </form>
      {people.map((p) => {
        return (
          <div key={p.id}>
            <h4>{p.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
