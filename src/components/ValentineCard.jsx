import React, { useState } from 'react';
import './ValentineCard.css';

const ValentineCard = ({ onYesClick }) => {
  const [noCount, setNoCount] = useState(0);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const phrases = [
    "No",
    "nejamava papa?",
    "kutty papa ku yena pedikalaya?",
    "yoschuko papa!",
    "kadaisi vaipu!",
    "Surely not?",
    "varutha paduva!",
    "poisolatha papa!",
    "yena pedikama yenga poi polabuva?",
    "This could be a mistake!",
    "Yenoda heart ta thare!",
    "yena pedikalana sami eyes ah kuthudum!",
    "manasa mathiko?",
    "reconsider panu papa?",
    "ithu tha final answer ah papa?",
    "avolo tha content illa yes ah click panidu ;(",
  ];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    const yesButton = document.querySelector('.yes-btn');
    if (yesButton) {
      const currentScale = 1 + noCount * 0.2;
      yesButton.style.transform = `scale(${currentScale})`;
    }
    
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    setNoButtonStyle({
      transform: `translate(${randomX}px, ${randomY}px)`,
      transition: 'all 0.3s ease'
    });
  };

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="valentine-container">
      <div className="hearts-background">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="floating-heart">❤️</div>
        ))}
      </div>
      
      <div className="valentine-card">
        <h1 className="valentine-title">Be My Valentine? ❤️</h1>
        
        <div className="gif-wrapper">
          <img 
  src="photos/img30.jpeg"  // Direct path to public folder
  alt="Cute valentine couple"
  className="valentine-gif"
/>
        </div>

        <div className="button-group">
          <button 
            className="yes-btn"
            onClick={onYesClick}
          >
            Yes! ❤️
          </button>
          <button 
            className="no-btn"
            onClick={handleNoClick}
            style={noButtonStyle}
          >
            {getNoButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValentineCard;
