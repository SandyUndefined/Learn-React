import React from "react";
import ReactDom from "react-dom";
// css
import "./index.css";

// variables
const firstItem = {
  img:
    "https://rukminim1.flixcart.com/image/150/150/k0463rk0/monitor/n/6/b/v206hql-v206hql-acer-original-imafjzemapccwgby.jpeg?q=70",
  name: "Acer Monitor",
  price: "Rs: 1568",
};
const secondItem = {
  img:
    "https://rukminim1.flixcart.com/image/312/312/kbcjpu80/monitor/h/w/f/22y-1px47aa-hp-original-imafspusqgzjvfuw.jpeg?q=70",
  name: "HP Monitor",
  price: "Rs: 2000",
};
const thirdItem = {
  img:
    "https://rukminim1.flixcart.com/image/312/312/kbcjpu80/monitor/h/w/f/22y-1px47aa-hp-original-imafspusqgzjvfuw.jpeg?q=70",
  name: "LG Monitor",
  price: "Rs: 1000",
};
const fourthItem = {
  img:
    "https://rukminim1.flixcart.com/image/312/312/kbcjpu80/monitor/h/w/f/22y-1px47aa-hp-original-imafspusqgzjvfuw.jpeg?q=70",
  name: "AOC Monitor",
  price: "Rs: 1500",
};

// Main components
function ListItems() {
  return (
    <section className="itemList">
      <Items img={firstItem.img} name={firstItem.name} price={firstItem.price}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          commodi deserunt corrupti error fugit praesentium odit hic facilis,
          rerum accusantium consequuntur culpa expedita maxime natus, quis,
          tempora distinctio? Hic, aliquam.
        </p>
      </Items>
      <Items
        img={secondItem.img}
        name={secondItem.name}
        price={secondItem.price}
      />
      <Items
        img={thirdItem.img}
        name={thirdItem.name}
        price={thirdItem.price}
      />
      <Items
        img={fourthItem.img}
        name={fourthItem.name}
        price={fourthItem.price}
      />
    </section>
  );
}
// Nestetd Components
// Destructring { img, name, price }
const Items = ({ img, name, price, children }) => {
  // another way to deal with props
  // const { img, name, price } = props;
  return (
    <article className="items">
      <img className="products" src={img}></img>
      <h4>{name}</h4>
      <p>{price}</p>
      {children}
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
