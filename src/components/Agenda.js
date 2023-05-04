// src/components/Agenda.js
import React from 'react';
import styles from '../styles/Agenda.module.css';

const EventoCard = ({ imagem, nome, descricao, data, local }) => {
  return (
    <div className={styles.eventoCard}>
      <img className={styles.eventoImagem} src={imagem} alt={nome} />
      <h3 className={styles.eventoNome}>{nome}</h3>
      <p className={styles.eventoDescricao}>{descricao}</p>
      <p className={styles.eventoData}>{data}</p>
      <p className={styles.eventoLocal}>{local}</p>
    </div>
  );
};

const Agenda = () => {
  const eventos = [
    {
      imagem: '/images/evento1.png',
      nome: 'Nome do Evento 1',
      descricao: 'Descrição do Evento 1',
      data: '01/06/2023',
      local: 'Local do Evento 1',
    },
    {
      imagem: '/images/evento2.png',
      nome: 'Nome do Evento 2',
      descricao: 'Descrição do Evento 2',
      data: '15/06/2023',
      local: 'Local do Evento 2',
    },
    // Adicione mais eventos conforme necessário
  ];

  return (
    <div>
        <div className={styles.titulo}>Eventos</div>
        <div className={styles.agenda}>
            {eventos.map((evento, index) => (
                <EventoCard key={index} {...evento} />
            ))}
        </div>
    </div>
  );
};

export default Agenda;
