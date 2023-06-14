import React from 'react';
import Link from 'next/link';
import styles from '../styles/Agenda.module.css';

const EventoCard = ({ imagem, nome, descricao, data, local, small }) => {
    if (small) {
        return (
            <Link href={`/evento/${nome.replace(/\s+/g, '-').toLowerCase()}`}>
                <div className={styles.cardSmall}>
                    <img className={styles.imagemSmall} src={imagem} alt={nome} />
                </div>
            </Link>
        );
    }

    return (
        <Link href={`/evento/${nome.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className={styles.eventoCard}>
                <img className={styles.eventoImagem} src={imagem} alt={nome} />
                <h3 className={styles.eventoNome}>{nome}</h3>
                <p className={styles.eventoDescricao}>{descricao}</p>
                <p className={styles.eventoData}>{data}</p>
                <p className={styles.eventoLocal}>{local}</p>
            </div>
        </Link>
    );
};

export default EventoCard;
