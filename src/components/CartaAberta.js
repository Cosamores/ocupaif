// src/components/CartaAberta.js
import React from 'react';
import styles from '../styles/CartaAberta.module.css';

const CartaAberta = ({ titulo, subtitulo, conteudo }) => {
    const conteudoFormatado = conteudo.replace(
        /TODOS./g,
        'TODOS.<br/>'
      ).replace(
        /Ocupar/g,
        '<br/><strong style="color: #ff5722;">Ocupar</strong>'
      );

  return (
    <section className={styles.cartaAberta}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <h3 className={styles.subtitulo}>{subtitulo}</h3>
      <p className={styles.conteudo} dangerouslySetInnerHTML={{ __html: conteudoFormatado }}></p>
    </section>
  );
};

export default CartaAberta;
