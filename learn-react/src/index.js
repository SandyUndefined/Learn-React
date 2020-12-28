import React from "react";
import ReactDom from "react-dom";
// css
import "./index.css";

// variables
const items = [
  {
    id: 1,
    img:
      "https://rukminim1.flixcart.com/image/150/150/k0463rk0/monitor/n/6/b/v206hql-v206hql-acer-original-imafjzemapccwgby.jpeg?q=70",
    name: "Acer Monitor",
    price: "Rs: 1568",
  },
  {
    id: 2,
    img:
      "https://rukminim1.flixcart.com/image/312/312/kbcjpu80/monitor/h/w/f/22y-1px47aa-hp-original-imafspusqgzjvfuw.jpeg?q=70",
    name: "HP Monitor",
    price: "Rs: 2000",
  },
  {
    id: 3,
    img:
      "https://rukminim1.flixcart.com/image/312/312/kbcjpu80/monitor/h/w/f/22y-1px47aa-hp-original-imafspusqgzjvfuw.jpeg?q=70",
    name: "LG Monitor",
    price: "Rs: 1000",
  },
  {
    id: 4,
    img:
      "https://rukminim1.flixcart.com/image/312/312/kbcjpu80/monitor/h/w/f/22y-1px47aa-hp-original-imafspusqgzjvfuw.jpeg?q=70",
    name: "AOC Monitor",
    price: "Rs: 1500",
  },
  {
    id: 5,
    img:
      "https://rukminim1.flixcart.com/image/312/312/kbcjpu80/monitor/h/w/f/22y-1px47aa-hp-original-imafspusqgzjvfuw.jpeg?q=70",
    name: "AOC Monitor",
    price: "Rs: 1500",
  },
];

// Main components
function ListItems() {
  return (
    <section className="itemList">
      {items.map((item) => {
        // const { img, name, price } = item;
        return <Items key={item.id} {...item}></Items>;
      })}
    </section>
  );
}
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

ReactDom.render(<ListItems />, document.getElementById("root"));
