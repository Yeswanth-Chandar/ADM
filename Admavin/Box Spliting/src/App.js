import React, { useState } from 'react';
import "./App.css"

const INITIAL_SIZE = 300;

function SquareBox() {
  const [squares, setSquares] = useState([{ x: 0, y: 0, size: INITIAL_SIZE }]);

  function handleClick(event, square) {
    const { offsetX, offsetY } = event.nativeEvent;
    const { x, y, size } = square;

    if (size > 10) { // minimum size to split square
      if (offsetX > x + size / 2 && offsetY > y + size / 2) {
        setSquares((prevSquares) => [
          ...prevSquares.filter((s) => s !== square),
          { x: x + size / 2, y: y + size / 2, size: size / 2 },
          { x: x, y: y + size / 2, size: size / 2 },
          { x: x, y: y, size: size / 2 },
          { x: x + size / 2, y: y, size: size / 2 },
        ]);
      } else if (offsetX > x + size / 2) {
        setSquares((prevSquares) => [
          ...prevSquares.filter((s) => s !== square),
          { x: x + size / 2, y: y, size: size / 2 },
          { x: x, y: y, size: size / 2 },
          { x: x, y: y + size / 2, size: size / 2 },
          { x: x + size / 2, y: y + size / 2, size: size / 2 },
        ]);
      } else if (offsetY > y + size / 2) {
        setSquares((prevSquares) => [
          ...prevSquares.filter((s) => s !== square),
          { x: x, y: y + size / 2, size: size / 2 },
          { x: x + size / 2, y: y + size / 2, size: size / 2 },
          { x: x + size / 2, y: y, size: size / 2 },
          { x: x, y: y, size: size / 2 },
        ]);
      } else {
        setSquares((prevSquares) => [
          ...prevSquares.filter((s) => s !== square),
          { x: x, y: y, size: size / 2 },
          { x: x + size / 2, y: y, size: size / 2 },
          { x: x + size / 2, y: y + size / 2, size: size / 2 },
          { x: x, y: y + size / 2, size: size / 2 },
        ]);
      }
    }
  }

  return (
    <div style={{ position: 'relative', width: INITIAL_SIZE, height: INITIAL_SIZE }}>
      {squares.map((square) => (
        <div
          key={`${square.x}-${square.y}`}
          style={{
            position: 'absolute',
            top: square.y,
            left: square.x,
            width: square.size,
            height: square.size,
            backgroundColor: 'gray',
            border: '1px solid black',
          }}
          onClick={(event) => handleClick(event, square)}
        />
      ))}
    </div>
  );
}

export default SquareBox;
