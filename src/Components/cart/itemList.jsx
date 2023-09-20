import React from "react";
import storeItems from "../data/products.json";
import { Item } from "./item.jsx";

export const ItemList = () => {
  return (
    <div className="items-list">
      {storeItems.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};
