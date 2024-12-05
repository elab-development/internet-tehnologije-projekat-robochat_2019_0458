import React, { useState, useEffect } from "react";
import "./CalmGameGUI.css";

const colors = ["#FFB6C1", "#FFDAB9", "#E0FFFF", "#B0E57C", "#FF69B4", "#D3B6E8"];
const animationTexts = [
  "Great!",
  "Bravooo!",
  "You are doing great!",
  "You are the best!",
  "What a score!",
  "You are a success!",
  "Go go go!"
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
const getRandomText = () => animationTexts[Math.floor(Math.random() * animationTexts.length)];

const CalmGameGUI = () => {
  const [colorToMatch, setColorToMatch] = useState(getRandomColor());
  const [selectedColor, setSelectedColor] = useState(null);
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [animationText, setAnimationText] = useState("");
  const [wrongColor, setWrongColor] = useState(null);

  useEffect(() => {
    if (selectedColor && gameActive) {
      if (selectedColor === colorToMatch) {
        setScore(prevScore => prevScore + 1);
        setColorToMatch(getRandomColor());
        setAnimationText(getRandomText());
        setWrongColor(null);
      } else {
        setWrongColor(selectedColor);
        setTimeout(() => setWrongColor(null), 500); // Reset shaking effect after 0.5 seconds
      }
      setSelectedColor(null);
    }
  }, [selectedColor]);

  useEffect(() => {
    if (animationText) {
      const timer = setTimeout(() => {
        setAnimationText("");
      }, 2000); // Message duration
      
      return () => clearTimeout(timer);
    }
  }, [animationText]);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setColorToMatch(getRandomColor());
    setAnimationText(""); // Ensure no animation text is visible at start
  };

  const stopGame = () => {
    setGameActive(false);
    setColorToMatch(null);
    setSelectedColor(null);
    setAnimationText(""); // Clear animation text when game stops
    setWrongColor(null); // Clear wrong color shaking effect
  };

  return (
    <section className="calm-game">
      <header className="calm-game-header">
        <h1 className="header">Relax and Unwind</h1>
      </header>

      <main className="calm-game-content">
        <div className="text-box">
          <p>
            Do you get frustrated easily? Try our calming color matching game. 
            Click the button below to start, and match the color to improve your score and relax.
          </p>
          <iframe style={{border:'none', height:'30rem', width:'30rem'}} src="https://lottie.host/embed/902bcda5-49e2-4497-9ab8-8c1c2b78abf5/risE9Btgrt.json"></iframe>
        </div>
        <div className="game-container">
          {!gameActive ? (
            <button className="play-game-btn" onClick={startGame}>Play Game</button>
          ) : (
            <div className="game-area">
              <div className="color-to-match" style={{ backgroundColor: colorToMatch }}>
                <p className="color-text">Match this color</p>
              </div>
              <div className="color-options">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`color-option ${wrongColor === color ? 'shake' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
              <div className="score-board">
                <p>Score: {score}</p>
                <button className="stop-game-btn" onClick={stopGame}>Stop Game</button>
              </div>
              {animationText && (
                <div className="animation-text">
                  <p>{animationText}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </section>
  );
};

export default CalmGameGUI;
