// src/components/CartaAberta.js
import React from 'react';
import styles from '../styles/CartaAberta.module.css';

const CartaAberta = ({ titulo, subtitulo, conteudo, convidamos }) => {
    const conteudoFormatado = conteudo.replace(
        /TODOS./g,
        'TODOS.<br/>'
      ).replace(
        /Ocupar/g,
        '<br/><strong style="color: #ff5722;">Ocupar</strong>'
      ).replace(
        /requisite./g,
        'requisite.<br/><br/>'
      )
      
    
const conteudoConvidamos = convidamos.replace(
        /ocupar/g,
        '<strong className="styles.convidamos" style="color: #ff5722;">ocupar</strong>');
      
  return (
  <div>
   <h2 className={styles.titulo}>{titulo}</h2>
    <section className={styles.cartaAberta}>
      <h3 className={styles.subtitulo}>{subtitulo}</h3>
      <p className={styles.conteudo} dangerouslySetInnerHTML={{ __html: conteudoFormatado }}></p>
      <p className={styles.convidamos} dangerouslySetInnerHTML={{ __html: conteudoConvidamos }}></p>
    </section>
    </div>
  );
};

export default CartaAberta;
