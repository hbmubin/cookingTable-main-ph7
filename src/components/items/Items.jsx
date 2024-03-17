import { useEffect } from "react";
import { useState } from "react";
import Item from "../item/Item";

const Items = ({ addToCook }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="grid grid-cols-2 w-2/3 gap-4">
      {items.map((item) => (
        <Item key={item.recipe_id} item={item} addToCook={addToCook}></Item>
      ))}
    </div>
  );
};

export default Items;
