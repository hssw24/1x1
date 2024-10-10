import React, { useState, useEffect } from 'react';
import MultiplicationButtons from './MultiplicationButtons';

const App = () => {
  const [factor1, setFactor1] = useState(2);
  const [factor2, setFactor2] = useState(2);
  const [correctAnswer, setCorrectAnswer] = useState(factor1 * factor2);
  const [feedback, setFeedback] = useState('');
  const [correctCount, setCorrectCount] = useState(0); // Anzahl richtiger Antworten
  const [totalCount, setTotalCount] = useState(0); // Gesamtanzahl der Aufgaben

  // Generiere eine neue Frage
  const generateQuestion = () => {
    const newFactor1 = Math.floor(Math.random() * 8) + 2; // 2 bis 9
    const newFactor2 = Math.floor(Math.random() * 8) + 2; // 2 bis 9
    setFactor1(newFactor1);
    setFactor2(newFactor2);
    setCorrectAnswer(newFactor1 * newFactor2);
    setFeedback('');
  };

  // Überprüfe die Antwort
  const handleAnswer = (answer) => {
    setTotalCount(totalCount + 1); // Aktualisiere die Gesamtanzahl der Aufgaben
    if (answer === correctAnswer) {
      setCorrectCount(correctCount + 1); // Zähle richtige Antworten
      setFeedback('Richtig! Gut gemacht.');
      setTimeout(generateQuestion, 2000); // Neue Frage nach 2 Sekunden
    } else {
      setFeedback('Falsch! Versuch es noch einmal.');
    }
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Multiplication Practice</h1>
      <h2 style={styles.question}>
        Was ist {factor1} × {factor2}?
      </h2>
      <MultiplicationButtons onAnswerClick={handleAnswer} />
      {feedback && <h3 style={styles.feedback}>{feedback}</h3>}
      <div style={styles.stats}>
        <h3>Statistik: {correctCount}/{totalCount}</h3>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
    padding: '10px',
  },
  heading: {
    color: '#333',
    fontSize: '24px',
  },
  question: {
    color: '#666',
    fontSize: '20px',
  },
  feedback: {
    color: '#666',
    fontSize: '18px',
    marginTop: '20px',
  },
  stats: {
    marginTop: '20px',
  },
};

export default App;
