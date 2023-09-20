// src/components/EventoCard.js
import React, { useState } from 'react';
import styles from '../styles/Agenda.module.css';
import Modal from './Modal';
import DetalhesEvento from './DetalhesEvento';
import Image from 'next/image';

const EventoCard = ({ imagem, nome, descricao, data, local, small }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className={small ? styles.cardSmall : styles.eventoCard} 
        onClick={handleOpenModal}
      >
        <Image 
          className={small ? styles.imagemSmall : styles.eventoImagem} 
          src={imagem} 
          alt={nome}
          width={500}
          height={500} 
        />
        {!small && (
          <>
            <h3 className={styles.eventoNome}>{nome}</h3>
            <p className={styles.eventoDescricao}>{descricao}</p>
            <p className={styles.eventoData}>{data}</p>
            <p className={styles.eventoLocal}>{local}</p>
          </>
        )}
      </button>
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <DetalhesEvento
            imagem={imagem}
            nome={nome}
            descricao={descricao}
            data={data}
            local={local}
          />
        </Modal>
      )}
    </>
  );
};

export default EventoCard;
