import React from "react";

// Nestetd Components
// Destructring { img, name, price }
const Items = (props) => {
  // another way to deal with props
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickhandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("This is my page");
  };
  const complexHandler = (name) => {
    console.log(name);
  };
  const { img, name, price } = props;
  return (
    // inLine event handlers
    <article
      className="items"
      onMouseOver={() => {
        console.log(img);
      }}
    >
      <img className="products" src={img} alt=""></img>
      <h4 onClick={() => console.log(name)}>{name}</h4>
      <p>{price}</p>
      <button type="button" onClick={clickhandler}>
        OnClick
      </button>
      <button type="button" onClick={() => complexHandler(name)}>
        Complex Example
      </button>
    </article>
  );
};

// Components
// const Name = () => <p>Sandeep Sharma</p>;
// const Message = () => {
//   return <p>To my world</p>;
// };
// const Welcome = () => {
//   return React.createElement("h1", {}, "Learn React");
// };

export default Items;
