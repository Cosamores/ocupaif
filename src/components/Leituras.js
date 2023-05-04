// components/Leituras.js
import React from 'react';
import styles from '../styles/Leituras.module.css';

const Leituras = ({ books }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Leituras Relevantes</h2>
      <ul className={styles.linkList}>
        {books.map((book, index) => (
          <li key={index}>
            <a href={book.url} target="_blank" rel="noopener noreferrer">
              {book.title} - {book.author}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leituras;
