import React from 'react';

const MultiplicationButtons = ({ onAnswerClick }) => {
  const results = [
    4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 30,
    32, 35, 36, 40, 42, 45, 48, 49, 54, 56, 63, 64, 72, 81
  ];

  return (
    <div style={styles.buttonContainer}>
      {results.map((result, index) => (
        <button
          key={index}
          onClick={() => onAnswerClick(result)}
          style={styles.button}
        >
          {result}
        </button>
      ))}
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2px', // 10
    marginTop: '20px',
  },
  button: {
    padding: '12px 18px', // 10 15 Verkleinertes Padding für mobile Ansicht
    fontSize: '20px', // 14 Kleinere Schriftgröße
    cursor: 'pointer',
    borderRadius: '6px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    width: '75px', // 70 Kleinere Breite, damit sie auf den Bildschirm passen
    textAlign: 'center',
  },
};

export default MultiplicationButtons;
