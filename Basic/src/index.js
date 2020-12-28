import React from "react";
import ReactDom from "react-dom";
// css
import "./index.css";

// import and export
import { items } from "./item";
import Items from "./itmesComponent";
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

ReactDom.render(<ListItems />, document.getElementById("root"));
