import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Sample data for the nested list
const data = [
  {
    id: 1,
    text: "Item 1",
    children: [
      {
        id: 2,
        text: "Sub-Item 1",
        children: [
          {
            id: 3,
            text: "Sub-Sub-Item 1",
            children: [],
          },
        ],
      },
      {
        id: 4,
        text: "Sub-Item 2",
        children: [],
      },
    ],
  },
  {
    id: 5,
    text: "Item 2",
    children: [
      {
        id: 6,
        text: "Sub-Item 3",
        children: [],
      },
    ],
  },
];

ReactDOM.render(<App data={data} />, document.getElementById("root"));
