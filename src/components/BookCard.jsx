import React from 'react';

function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{titre}</h3>
      <p style={styles.author}>Auteur : {auteur}</p>

      <p style={styles.status}>
        Statut :{' '}
        <span style={estDisponible ? styles.available : styles.borrowed}>
          {estDisponible ? 'Disponible' : 'Emprunté'}
        </span>
      </p>

      <button
        style={estDisponible ? styles.btnEmprunter : styles.btnRendre}
        onClick={onClickEmprunt}
      >
        {estDisponible ? 'Emprunter' : 'Rendre'}
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '16px',
    margin: '12px 0',
    width: '280px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  title: {
    margin: '0 0 8px',
    color: '#2c3e50',
  },
  author: {
    margin: '0 0 8px',
    color: '#555',
  },
  status: {
    margin: '0 0 12px',
    fontWeight: 'bold',
  },
  available: {
    color: 'green',
  },
  borrowed: {
    color: 'crimson',
  },
  btnEmprunter: {
    padding: '8px 14px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  btnRendre: {
    padding: '8px 14px',
    backgroundColor: '#e67e22',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default BookCard;