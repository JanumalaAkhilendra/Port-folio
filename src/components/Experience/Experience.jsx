import React from "react";
import "./Experience.css"

const GameCard = ({ imageUrl }) => {
    return (
      <div className="b-game-card">
        <div
          className="b-game-card__cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
    );
  };
  
  const Experience = () => {
    const gameImages = [
      'https://raw.githubusercontent.com/JanumalaAkhilendra/portfolio-akhil2/main/1.png',
      'https://raw.githubusercontent.com/JanumalaAkhilendra/portfolio-akhil2/main/2.png',
      'https://raw.githubusercontent.com/JanumalaAkhilendra/portfolio-akhil2/main/3.png',
    ];
  
    return (
      <>
      <div className="projecttitle">
                    <h2>Experience</h2>
                </div>
      <div className="l-container" id="Experience">
        {gameImages.map((imageUrl, index) => (
          <GameCard key={index} imageUrl={imageUrl} />
        ))}
      </div>
      </>
    );
  };
  
  export default Experience;