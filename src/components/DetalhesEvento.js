import React, { useState } from 'react';
import styles from '../styles/DetalhesEvento.module.css';
import Comentarios from './Comentarios';

const DetalhesEvento = ({ imagem, nome, descricao, data, local }) => {
  const [comments, setComments] = useState([]);
  
  const handleAddComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <div className={styles.detalhesEvento}>
      <img className={styles.imagem} src={imagem} alt={nome} />
      <h2 className={styles.nome}>{nome}</h2>
      <p className={styles.descricao}>{descricao}</p>
      <p className={styles.data}>{data}</p>
      <p className={styles.local}>{local}</p>
      <div className={styles.comentarioInput}>
        <input type="text" placeholder="Adicionar comentário" onSubmit={handleAddComment} />
      </div>
      <Comentarios comments={comments} />
    </div>
  );
};

export default DetalhesEvento;
