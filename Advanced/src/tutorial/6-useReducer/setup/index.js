import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please Enter Value" };
  }
  throw new Error("No matching type");
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
const Index = () => {
  const [name, setname] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime.toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setname("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
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
      {state.people.map((p) => {
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
