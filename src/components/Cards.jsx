import React from 'react';

function Cards({ tit, desc, maxWidth }) {
  return (
    <div style={{ ...styles.card, maxWidth: maxWidth || styles.card.maxWidth }}>
      <h3>{tit}</h3>
      <p>{desc}</p>
    </div>
  );
}

const styles = {
  card: {
    fontSize: '20px',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '10px',
    backgroundColor: '#f5f5f5',
    color: 'black',
    fontFamily: 'Quicksand, sans-serif',
    maxWidth: '400px', // Valor padrão
    wordWrap: 'break-word',
  },
};

export default Cards;
