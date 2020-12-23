import React from "react";
import ReactDom from "react-dom";
// css
import "./index.css";

// Nested Components
function ListItems() {
  return (
    <section className="itemList">
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </section>
  );
}

const Items = () => {
  return (
    <article className="items">
      <Image />
      <ItemName />
      <Price />
    </article>
  );
};
const ItemName = () => {
  return <h4>Item</h4>;
};
const Image = () => (
  <img
    src="https://rukminim1.flixcart.com/image/150/150/k0463rk0/monitor/n/6/b/v206hql-v206hql-acer-original-imafjzemapccwgby.jpeg?q=70"
    alt="something"
  ></img>
);
const Price = () => (
  // Inline-css
  <p style={{ color: "yellowgreen", marginTop: "0.25rem" }}>Rs:556.50</p>
);

// Components
// const Name = () => <p>Sandeep Sharma</p>;
// const Message = () => {
//   return <p>To my world</p>;
// };
// const Welcome = () => {
//   return React.createElement("h1", {}, "Learn React");
// };

ReactDom.render(<ListItems />, document.getElementById("root"));
