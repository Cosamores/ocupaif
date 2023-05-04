// src/components/CartaAberta.js
import React from 'react';
import styles from '../styles/CartaAberta.module.css';

const CartaAberta = ({ titulo, subtitulo, conteudo }) => {
  return (
    <section className={styles.cartaAberta}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <h3 className={styles.subtitulo}>{subtitulo}</h3>
      <p className={styles.conteudo}>{conteudo}</p>
    </section>
  );
};

export default CartaAberta;
