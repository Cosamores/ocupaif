import React, { useEffect, useState, useMemo } from 'react';
import EventoCard from '../components/EventoCard';
import Card from '@/components/Card';
import styles from '../styles/EventosLista.module.css';

const EventosLista = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    // Fetch your events data here. This is just an example.
    const fetchedEventos = [
      {
     
        imagem: '/images/roda1.jpg',
        nome: 'Roda de conversa do OcupaiF',
        descricao: `Nos reuniremos no refeitório para conversarmos sobre os próximos passos do coletivo`,
        data: 'Quarta-feira, 07 de junho',
        hora:' 20:30 (durante o intervalo)',
        local: 'Local: Refeitório do IFSP',
        dataComp: new Date(2023, 7, 5),
      },
        {
          imagem: '/images/oficina_cartazes.png',
          nome: 'Oficina de Cartazes',
          descricao: `Junte-se a nós para criarmos cartazes impactantes e cheios de significado, que serão colados nos murais do instituto. Queremos tornar visíveis as questões que mais importam e promover debates construtivos em nossa comunidade acadêmica.`,
          data: 'Quarta-feira, 31 de maio',
          hora:' 20:30 (durante o intervalo)',
          local: 'Local: Refeitório do IFSP',
          dataComp: new Date(2023, 4, 31),
        }
      ];

      setEventos(fetchedEventos);
  }, []);

  const now = new Date();

  const eventosFuturos = useMemo(() => 
    eventos.filter(evento => new Date(evento.dataComp) >= now), 
  [eventos]);

  const eventosPassados = useMemo(() => 
    eventos.filter(evento => new Date(evento.dataComp) < now), 
  [eventos]);

  return (
    <div className={styles.eventosLista}>
      <div className={styles.eventosFuturos}>
        <h2 className={styles.titulo}>Eventos Futuros</h2>
    
        {eventosFuturos.map((evento, index) => (
          <EventoCard key={index} {...evento} />
        ))}
      
      </div>

      <div className={styles.eventosPassados}>
        <h2 className={styles.titulo}>Eventos Passados</h2>
        <div className={styles.eventosContainer}>
        {eventosPassados.map((evento, index) => (
          <EventoCard key={index} {...evento} small />
        ))}
          </div>
      </div>
    </div>
  );
};

export default EventosLista;