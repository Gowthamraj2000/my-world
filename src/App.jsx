import React, { useState, useEffect } from 'react';
import ValentineCard from './components/ValentineCard';
import ValentineQuiz from './components/ValentineQuiz';
import PhotoGallery from './components/PhotoGallery';
import './App.css';

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (quizCompleted && window.confetti) {
      // Massive confetti celebration for passing the quiz!
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          window.confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6, x: i * 0.1 }
          });
        }, i * 150);
      }
    }
  }, [quizCompleted]);

  return (
    <>
      {!yesPressed ? (
        <ValentineCard onYesClick={() => setYesPressed(true)} />
      ) : !quizCompleted ? (
        <ValentineQuiz onQuizComplete={() => setQuizCompleted(true)} />
      ) : (
        <PhotoGallery />
      )}
    </>
  );
}

export default App;