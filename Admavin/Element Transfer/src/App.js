import React, { useState } from "react";
import "./App.css";

const elements = [
  "Element 1",
  "Element 2",
  "Element 3",
  "Element 4",
  "Element 5",
  "Element 6",
  "Element 7",
  "Element 8",
  "Element 9",
  "Element 10"
];

const Bucket = ({ title, elements, selectedElements, onElementSelect }) => {
  return (
    <div className="bucket">
      <h3>{title}</h3>
      <ul>
        {elements.map((element) => (
          <li
            key={element}
            className={selectedElements && selectedElements.includes(element) ? "selected" : ""}
            onClick={() => {
              onElementSelect && onElementSelect(element);
            }}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ElementTransfer = () => {
  const [bucket1Elements, setBucket1Elements] = useState(elements);
  const [bucket2Elements, setBucket2Elements] = useState([]);
  const [selectedElements, setSelectedElements] = useState([]);

  const handleElementSelect = (element) => {
    if (selectedElements.includes(element)) {
      setSelectedElements(selectedElements.filter((e) => e !== element));
    } else {
      setSelectedElements([...selectedElements, element]);
    }
  };

  const handleAddElements = () => {
    if (selectedElements.length === 0) {
      return;
    }
    if (bucket2Elements.length === 0) {
      setBucket2Elements([...selectedElements]);
      setBucket1Elements(bucket1Elements.filter((element) => !selectedElements.includes(element)));
    } else {
      setBucket2Elements([...bucket2Elements, ...selectedElements]);
      setBucket1Elements(bucket1Elements.filter((element) => !selectedElements.includes(element)));
    }
    setSelectedElements([]);
  };

  const handleRemoveElements = () => {
    if (selectedElements.length === 0) {
      return;
    }
    if (bucket1Elements.length === 0) {
      setBucket1Elements([...selectedElements]);
      setBucket2Elements(bucket2Elements.filter((element) => !selectedElements.includes(element)));
    } else {
      setBucket1Elements([...bucket1Elements, ...selectedElements]);
      setBucket2Elements(bucket2Elements.filter((element) => !selectedElements.includes(element)));
    }
    setSelectedElements([]);
  };

  const handleAddAllElements = () => {
    if (bucket1Elements.length === 0) {
      return;
    }
    if (bucket2Elements.length === 0) {
      setBucket2Elements([...bucket1Elements]);
      setBucket1Elements([]);
    } else {
      setBucket2Elements([...bucket2Elements, ...bucket1Elements]);
      setBucket1Elements([]);
    }
    setSelectedElements([]);
  };

  const handleRemoveAllElements = () => {
    if (bucket2Elements.length === 0) {
      return;
    }
    if (bucket1Elements.length === 0) {
      setBucket1Elements([...bucket2Elements]);
      setBucket2Elements([]);
    } else {
      setBucket1Elements([...bucket1Elements, ...bucket2Elements]);
      setBucket2Elements([]);
    }
    setSelectedElements([]);
  };

  return (
    <div className="element-transfer">
      <Bucket
        title="Bucket 1"
        elements={bucket1Elements}
        selectedElements={selectedElements}
        onElementSelect={handleElementSelect}
      />
      <div className="buttons">
        <button onClick={handleAddElements}>Add Selected</button>
        <button onClick={handleRemoveElements}>Remove Selected</button>
        <button onClick={handleAddAllElements}>Add All</button>
        <button onClick={handleRemoveAllElements}>Remove All</button>
      </div>
      <Bucket
        title="Bucket 2"
        elements={bucket2Elements}
        selectedElements={selectedElements}
        onElementSelect={handleElementSelect}
      />
    </div>
  );
};

export default ElementTransfer;
