// components/Comentarios.js

import React, { useState, useEffect } from 'react';
import styles from '../styles/Comentarios.module.css';

const Comentarios = ({ eventoId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!eventoId) return;

    async function fetchComments() {
      setLoading(true);
      setError(null);
      console.log(`EventoId no Comentário: ${eventoId}`);

      try {
        const response = await fetch(`/.netlify/functions/comments?eventoId=${eventoId}`);
        const data = await response.json();
        setComments(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao buscar comentários:", error);
        setError("Falha ao buscar comentários");
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [eventoId]);

  const handleNewCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() === '' || name.trim() === '') return;

    const commentData = {
      nome: name.trim(),
      comentario: newComment.trim(),
      data: new Date(),
      eventoId: eventoId,
    };

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (response.status !== 200) {
        const errorData = await response.json();
        console.error("Erro no servidor:", errorData.error);
        setError(errorData.error);
        return;
      }

      const data = await response.json();
      setComments((prevComments) => [...prevComments, data]);

      setNewComment('');
      setName('');
    } catch (error) {
      console.error("Erro ao postar comentário:", error);
      setError("Falha ao postar comentário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.comentarios}>
      <h2 className={styles.titulo}>Comentários:</h2>
      {loading ? (
        <p>Carregando comentários...</p>
      ) : error ? (
        <p>{error}</p>
      ) : comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className={styles.commentBlock}>
            <p className={styles.commentName}>{comment.nome}</p>
            <p className={styles.mensagem}>{comment.comentario}</p>
            <p className={styles.date}>
              {new Date(comment.data).toLocaleDateString()}
            </p>
          </div>
        ))
      ) : (
        <p>Nenhum comentário disponível. Seja o primeiro a comentar!</p>
      )}

      <form className={styles.form} onSubmit={handleNewCommentSubmit}>
        <input
          className={styles.nameInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome..."
        />
        <textarea
          className={styles.commentInput}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Adicionar um comentário..."
        />
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? "Postando comentário..." : "Publicar Comentário"}
        </button>
      </form>
    </div>
  );
};

export default Comentarios;
