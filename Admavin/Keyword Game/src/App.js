import React, { useState, useEffect } from 'react';
import './App.css';

const BOXES_COUNT = 9;
const KEYWORDS = ['HIT'];

function Game() {
  const [keywords, setKeywords] = useState(new Array(BOXES_COUNT).fill(null));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerId, setTimerId] = useState(null);
  const [clickedBoxIndex, setClickedBoxIndex] = useState(null);

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      endGame();
    }
  }, [timeLeft]);

  function startGame() {
    setScore(0);
    setTimeLeft(60);
    setClickedBoxIndex(null);
    generateKeywords();
    startTimer();
  }

  function endGame() {
    clearInterval(timerId);
    setTimerId(null);
    setClickedBoxIndex(null);
  }

  function startTimer() {
    const id = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);
    setTimerId(id);
  }

  function generateKeywords() {
    const keywordIndex = Math.floor(Math.random() * BOXES_COUNT);
    const newKeywords = new Array(BOXES_COUNT).fill(null);
    newKeywords[keywordIndex] = KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)];
    setKeywords(newKeywords);
    setTimeout(() => setKeywords(new Array(BOXES_COUNT).fill(null)), 1000);
  }

  function handleBoxClick(index) {
    if (keywords[index]) {
      setScore((prevScore) => prevScore + 5);
      setClickedBoxIndex(index);
      generateKeywords();
    } else {
      setScore((prevScore) => prevScore - 2.5);
    }
  }

  return (
    <div className="game">
      <h1>Keyword Game</h1>
      <p>Time Left: {timeLeft} seconds</p>
      <div className="boxes-container">
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className={`box ${index === clickedBoxIndex ? 'clicked' : ''}`}
            onClick={() => handleBoxClick(index)}
          >
            {keyword}
          </div>
        ))}
      </div>
      <p>Score: {score}</p>
      {timerId === null && (
        <button onClick={startGame}>Start Game</button>
      )}
    </div>
  );
}

export default Game;
