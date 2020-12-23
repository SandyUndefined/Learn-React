import React from "react";
import ReactDom from "react-dom";

// Nested Components
function ListItems() {
  return (
    <section>
      <ItemName />
      <Image />
      <Price />
    </section>
  );
}

const ItemName = () => {
  return <article>Item</article>;
};
const Image = () => (
  <img src="https://rukminim1.flixcart.com/image/150/150/k0463rk0/monitor/n/6/b/v206hql-v206hql-acer-original-imafjzemapccwgby.jpeg?q=70"></img>
);
const Price = () => <p>555.50</p>;
// Components
// const Name = () => <p>Sandeep Sharma</p>;
// const Message = () => {
//   return <p>To my world</p>;
// };
// const Welcome = () => {
//   return React.createElement("h1", {}, "Learn React");
// };

ReactDom.render(<ListItems />, document.getElementById("root"));
