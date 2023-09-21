//frontend/components/comments.js
import React, { useState, useEffect } from 'react';
import styles from '../styles/Comentarios.module.css';

const Comentarios = ({ eventoName }) => {  // Assuming the event name is passed as a prop
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        async function fetchComments() {
            try {
                const response = await fetch(`/.netlify/functions/comments?evento=${eventoName}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        }
        fetchComments();
    }, [eventoName]);

    const handleNewCommentSubmit = async (e) => {
        e.preventDefault();
        if (newComment.trim() === '' || name.trim() === '') return;

        const commentData = {
            nome: name.trim(),
            comentario: newComment.trim(),
            data: new Date(), 
            evento: eventoName
        };

        try {
            const response = await fetch('/.netlify/functions/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentData),
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setComments(prevComments => [...prevComments, data]);
            setNewComment('');
            setName('');
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };

    return (
        <div className={styles.comentarios}>
            <h2 className={styles.titulo}>Comentários:</h2>
            {comments.map((comment, index) => (
                <div key={index} className={styles.commentBlock}>
                    <p className={styles.commentName}>{comment.nome}</p>
                    <p className={styles.mensagem}>{comment.comentario}</p>
                </div>
            ))}
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
                <button type="submit" className={styles.submitButton}>Publicar Comentário</button>
            </form>
        </div>
    );
};

export default Comentarios;
