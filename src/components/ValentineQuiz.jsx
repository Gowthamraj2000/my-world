import React, { useState } from 'react';
import './ValentineQuiz.css';

const ValentineQuiz = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [hearts, setHearts] = useState(3);
  const [showHint, setShowHint] = useState(false);

  // CUSTOMIZE THESE QUESTIONS - Make them personal! 💕
  const questions = [
    {
      id: 1,
      question: "yeppa neyum nanum first tie pathukutom? 👀",
      options: ["🏠 coimbatore la", "🎬 Movie Theater la", "🏢 Institute la", "🍝 Restaurant la"],
      correct: 2, // Index of correct answer (0-based)
      hint: "C/C++ paduchum but ne romba nal achu athunala yena marathuta! 🖥️💙",
      funFact: "unaku yenoda munchi kuda nayapakam illa! ☕😂"
    },
    {
      id: 2,
      question: "nama regular ahh saapdura biriyani sapta kada yena? 🍛",
      options: ["🍛 Kumar mess", "🍗 Sultan biriyani", "🥘 SS hydrabad", "🌶️ Dindugal Biriyani"],
      correct: 2,
      hint: "budget la naraya sapdulam? 💰🍚",
      funFact: "yavolo saptalum namaku biriyani sapda marupadiyu povom 💚🍛"
    },
    {
      id: 3,
      question: "yena nama first lip kiss panam? 💋",
      options: ["🚗 coimbatore la", "🏡 Otty home stay balcony la", "🏨 madurai la ganesh v2ketta", "😵 marathutaya? 💝"],
      correct: 1,
    hint: "Balcony... night... cold weather... nee shivering 🤭💕",
    funFact: "I still get butterflies when I imagine that moment! 🦋✨"
    },
    {
      id: 4,
      question: "Ne yenketta yena nala pathupaya nu ketta day enna?",
          options: [
      "❄️ January 15 📅", 
      "💝 February 14 📅", 
      "🌸 March 20 📅", 
      "☀️ July 06 📅"
    ],
      correct: 3,
      hint: "It's the most romantic day of the year!",
      funFact: "Best day of my life! I'll never forget that moment ❤️🥺"
    },
    {
      id: 5,
      question: "What's my favorite color? 🎨",
      options: ["Blue 💙", "Red ❤️", "Purple 💜", "Green 💚"],
      correct: 3,
      hint: "yena ku first tym gift pana tshirt color! 👕🎁",
      funFact: "antha tshirt potu otty la sagathila veluthom! 🌿💚"
    },
    {
      id: 6,
      question: "Nama romba sothunathu yeppa? 🚗💨",
          options: [
      "☀️ Afternoon tym", 
      "🌙 Night tym", 
      "🌅 Morning tym", 
      "🌆 Evening tym"
    ],
      correct: 1,
    hint: "CBE city full ah suthinom... bike la 🏍️🌃",
    funFact: "Suthatha yedame illa papa CBE la! Race course, Gandhipuram, Ukkadam ellam! ✨🌉"
    }
  ];

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
  };

const handleNextQuestion = () => {
  // Check if answer is correct
  if (selectedAnswer === questions[currentQuestion].correct) {
    setScore(score + 1);
  } else {
    const newHearts = hearts - 1;
    setHearts(newHearts);
    
    // ❤️ IMPORTANT: If no hearts left, show result screen immediately
    if (newHearts === 0) {
      setTimeout(() => {
        setShowResult(true);
      }, 500);
      return;
    }
  }

  // Move to next question or show results
  setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowHint(false);
    } else {
      setShowResult(true);
    }
  }, 500);
};

  const calculatePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  const getMessage = () => {
    const percentage = calculatePercentage();
    if (percentage === 100) {
      return "PERFECT! papa ku yella memories yum irukku! ❤️✨";
    } else if (percentage >= 80) {
      return "Amazing! parava illa yelam nayabakam iruku! 💝🌟";
    } else if (percentage >= 60) {
      return "Good job! But naraya sothanum pola vedu naraya sothala! 💕🎯";
    } else {
      return "Podi kerukku papa! 💘🌹";
    }
  };

  if (hearts === 0 && !showResult) {
  setShowResult(true);
  return null;
}

  if (showResult) {
    const passed = score >= 4; // Pass if score is 4 or more
    
    return (
      <div className="quiz-result-container">
        <div className="quiz-result-card">
          <div className="result-animation">
            {passed ? '🎉 🎊 💖' : '💪 🌹 ✨'}
          </div>
          
          <h2 className="result-title">
            {passed ? 'Quiz Complete! 🎯' : 'Almost There! 💪'}
          </h2>
          
          <div className="score-display">
            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">/{questions.length}</span>
            </div>
            <p className="score-percentage">{calculatePercentage()}%</p>
          </div>

          <p className="result-message">{getMessage()}</p>
          
          {passed ? (
            <>
              <p className="unlock-message">
                🎁 You've unlocked our special memories papa! 🎁
              </p>
              <button 
                className="continue-btn"
                onClick={onQuizComplete}
              >
                Open Our Memories ❤️
              </button>
            </>
          ) : (
            <>
              <p className="try-again-message">
                You need at least 4 correct answers to unlock the gallery!
              </p>
              <button 
                className="retry-btn"
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setHearts(3);
                  setShowResult(false);
                  setSelectedAnswer(null);
                }}
              >
                Try Again 🔄
              </button>
            </>
          )}

          <div className="love-encouragement">
            {!passed && "You know me better than this! Try again papa! 💕"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {/* Hearts remaining */}
        <div className="quiz-header">
          <div className="hearts-left">
            {[...Array(hearts)].map((_, i) => (
              <span key={i} className="heart-full">❤️</span>
            ))}
            {[...Array(3 - hearts)].map((_, i) => (
              <span key={i} className="heart-empty">🖤</span>
            ))}
          </div>
          <div className="question-counter">
            Question {currentQuestion + 1}/{questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <h2 className="question-text">
          {questions[currentQuestion].question}
        </h2>

        {/* Options */}
        <div className="options-grid">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${selectedAnswer === index ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(index)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Hint Section */}
        <div className="hint-section">
          {showHint ? (
            <div className="hint-box">
              <span className="hint-icon">💡</span>
              <p className="hint-text">{questions[currentQuestion].hint}</p>
            </div>
          ) : (
            <button 
              className="hint-btn"
              onClick={() => setShowHint(true)}
            >
              💡 Need a hint?
            </button>
          )}
        </div>

        {/* Fun Fact (shows after answer selected) */}
        {selectedAnswer !== null && (
          <div className="fun-fact">
            <span className="fun-fact-icon">✨</span>
            <p>{questions[currentQuestion].funFact}</p>
          </div>
        )}

        {/* Next Button */}
        <button 
          className={`next-btn ${selectedAnswer !== null ? 'active' : 'disabled'}`}
          disabled={selectedAnswer === null}
          onClick={handleNextQuestion}
        >
          {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See Results'}
        </button>

        {/* Cute Message */}
        <div className="quiz-footer">
          <p>💝 Show me how well you know me!</p>
        </div>
      </div>

      {/* Floating Hearts Animation */}
      <div className="quiz-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="quiz-floating-heart">❤️</div>
        ))}
      </div>
    </div>
  );
};

export default ValentineQuiz;