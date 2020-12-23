import React from "react";
import ReactDom from "react-dom";
// css
import "./index.css";

// Nested Components
function ListItems() {
  return (
    <section className="itemList">
      <Items />
    </section>
  );
}

const Items = () => {
  const name = "Acer Monitor";
  const price = "Rs: 1568";
  return (
    <article className="items">
      <img
        src="https://rukminim1.flixcart.com/image/150/150/k0463rk0/monitor/n/6/b/v206hql-v206hql-acer-original-imafjzemapccwgby.jpeg?q=70"
        alt="something"
      ></img>
      <h4>{name.toLocaleUpperCase()}</h4>
      <p>{price}</p>
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
