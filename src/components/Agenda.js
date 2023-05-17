// src/components/Agenda.js
import React from 'react';
import styles from '../styles/Agenda.module.css';

const EventoCard = ({ imagem, nome, descricao, data, hora, local }) => {
  return (
    <div className={styles.eventoCard}>
      <img className={styles.eventoImagem} src={imagem} alt={nome} />
      <h3 className={styles.eventoNome}>{nome}</h3>
      <p className={styles.eventoDescricao}>{descricao}</p>
      <p className={styles.eventoDataHora}>
        {data} 
      </p>
      <p className={styles.eventoData}> {hora}</p>
      <p className={styles.eventoLocal}>{local}</p>
    </div>
  );
};

const Agenda = () => {
  const eventos = [
    {
      imagem: '/images/oficina_cartazes.png',
      nome: 'Oficina de Cartazes',
      descricao: `Junte-se a nós para criarmos cartazes impactantes e cheios de significado, que serão colados nos murais do instituto. Queremos tornar visíveis as questões que mais importam e promover debates construtivos em nossa comunidade acadêmica.`,
      data: 'Quarta-feira, 24 de maio',
      hora:' 20:30 (durante o intervalo)',
      local: 'Local: Refeitório do IFSP',
    },
/*     {
      imagem: '/images/evento2.png',
      nome: 'Nome do Evento 2',
      descricao: 'Descrição do Evento 2',
      data: '15/06/2023',
      hora: '10:00',
      local: 'Local do Evento 2',
    }, */
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
