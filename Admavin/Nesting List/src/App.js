import React, { useState } from "react";
import "./App.css"

const initialItems = [
  {
    name: "Item 1",
    items: [
      {
        name: "Item 1.1",
        items: [
          {
            name: "Item 1.1.1",
          },
          {
            name: "Item 1.1.2",
          },
        ],
      },
      {
        name: "Item 1.2",
        items: [
          {
            name: "Item 1.2.1",
          },
          {
            name: "Item 1.2.2",
          },
        ],
      },
    ],
  },
  {
    name: "Item 2",
    items: [
      {
        name: "Item 2.1",
      },
      {
        name: "Item 2.2",
      },
    ],
  },
];

const NestedList = () => {
  const [items, setItems] = useState(initialItems);

  const handleClick = (item) => {
    item.open = !item.open;
    setItems([...items]);
  };

  const renderItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        <span onClick={() => handleClick(item)}>{item.name}</span>
        {item.items && (
          <ul style={{ display: item.open ? "block" : "none" }}>
            {renderItems(item.items)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
    <h1 style={{ marginBottom: "1rem" }}>NestedList</h1>
      <ul>{renderItems(items)}</ul>
    </div>
  );
};

export default NestedList;
