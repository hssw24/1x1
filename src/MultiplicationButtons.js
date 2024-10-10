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
    gap: '15px',
    marginTop: '20px',
  },
  button: {
    padding: '15px 25px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '8px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    width: '90px', // optimiert für mobile Ansicht
    textAlign: 'center',
  },
};

export default MultiplicationButtons;