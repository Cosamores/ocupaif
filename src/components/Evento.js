import React, { useState, useEffect } from 'react';
import EventoCard from './EventoCard';
import styles from '../styles/Agenda.module.css';

const Evento = () => {
  const [upcomingEvent, setUpcomingEvent] = useState(null);

  const eventos = [
    {
      imagem: '/images/em-breve.png',
      nome: 'Boas férias!',
      descricao: 'Estamos organizando a agenda de eventos para o próximo semestre e em breve teremos novidades, venho',
      data: 'Junte-se a nós em nosso grupo do Whatsapp',
      hora: '',
      local: '',
      dataComp: new Date(2023, 7, 30),
    },
     {
      imagem: '/images/oficina_cartazes.png',
      nome: 'Oficina de Cartazes',
      descricao: `Junte-se a nós para criarmos cartazes impactantes e cheios de significado, que serão colados nos murais do instituto. Queremos tornar visíveis as questões que mais importam e promover debates construtivos em nossa comunidade acadêmica.`,
      data: 'Quarta-feira, 1 de maio',
      hora:' 20:30 (durante o intervalo)',
      local: 'Local: Refeitório do IFSP',
      dataComp: new Date(2023, 5, 31),
    }, 
    {
      imagem: '/images/roda1.jpg',
      nome: 'Roda de conversa do OcupaiF',
      descricao: `Nos reuniremos no refeitório para conversarmos sobre os próximos passos do coletivo`,
      data: 'Quarta-feira, 07 de junho',
      hora:' 20:30 (durante o intervalo)',
      local: 'Local: Refeitório do IFSP',
      dataComp: new Date(2023, 5, 7),

    },

  ];

  useEffect(() => {
    const nextEvent = eventos
      .sort((a, b) => new Date(a.dataComp) - new Date(b.dataComp))
      .filter(event => new Date(event.dataComp) >= new Date())[0];

    setUpcomingEvent(nextEvent);
  }, []);

  return (
    <div>
      <div className={styles.titulo}>Eventos</div>
      <div className={styles.agenda}>
        {upcomingEvent && <EventoCard {...upcomingEvent} />}
      </div>
    </div>
  );
};

export default Evento;