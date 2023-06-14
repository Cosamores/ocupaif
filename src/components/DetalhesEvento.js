import React from 'react';
import styles from '../styles/DetalhesEvento.module.css';
import Comentarios from './Comentarios';

const DetalhesEvento = ({ imagem, nome, descricao, data, local }) => {
  return (
    <div className={styles.detalhesEvento}>
      <img className={styles.imagem} src={imagem} alt={nome} />
      <h2 className={styles.nome}>{nome}</h2>
      <p className={styles.descricao}>{descricao}</p>
      <p className={styles.data}>{data}</p>
      <p className={styles.local}>{local}</p>
      <p className={styles.comentarios}><Comentarios /></p>
    </div>
  );
};

export default DetalhesEvento;
