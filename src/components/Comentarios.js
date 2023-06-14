import React, { useState, useEffect } from 'react';
import styles from '../styles/Comentarios.module.css';

const Comentarios = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setComments([{ name: 'John', comment: 'This is the first comment!' }, { name: 'Jane', comment: 'This is the second comment!' }]);
  }, []);

  const handleNewCommentInput = (e) => {
    setNewComment(e.target.value);
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleNewCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment !== '' && name !== '') {
      setComments([...comments, { name: name, comment: newComment }]);
      setNewComment('');
      setName('');
    }
  };

  return (
    <div className={styles.comentarios}>
      <h2 className={styles.titulo}>Comentários:</h2>
      {comments && comments.map((comment, index) => (
        <div key={index} className={styles.commentBlock}>
          <p className={styles.commentName}>{comment.name}</p>
          <p className={styles.mensagem}>{comment.comment}</p>
        </div>
      ))}
      <form className={styles.form} onSubmit={handleNewCommentSubmit}>
        <input
          className={styles.nameInput}
          value={name}
          onChange={handleNameInput}
          placeholder="Seu nome..."
        />
        <textarea
          className={styles.commentInput}
          value={newComment}
          onChange={handleNewCommentInput}
          placeholder="Adicionar um comentário..."
        />
        <button type="submit" className={styles.submitButton}>Publicar Comentário</button>
      </form>
    </div>
  );
};

export default Comentarios;
