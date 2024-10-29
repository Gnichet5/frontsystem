import React from 'react';

function Cards ({ tit, desc }) {
  return (
    <div style={styles.card}>
      <h3>{tit}</h3>
      <p>{desc}</p>
    </div>
  );
};

  const styles = {
    card: {
 fontSize:'20px',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '10px',
      backgroundColor: '#f5f5f5',
      fontColor: 'black',
      fontFamily: 'Quicksand, sans-serif',
      maxWidth: '300px',
      wordWrap: 'break-word',
    }
  };

export default Cards;
