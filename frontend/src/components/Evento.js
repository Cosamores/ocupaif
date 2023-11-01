import React, { useState, useEffect } from 'react';
import styles from '../styles/EventoCard.module.css';
import EventoCard from './EventoCard';

const Evento = () => {
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/.netlify/functions/get-all-events');
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setUpcomingEvent(data[0]);
        }

      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Em breve novos eventos");
    
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <div className={styles.titulo}>Eventos</div>
      {loading ? (
        <p>Carregando Eventos</p>
      ) : error ? (
        <p>{error}</p>
      ) : upcomingEvent ? (
        <div className={styles.agenda}>
          <EventoCard {...upcomingEvent} eventoId={upcomingEvent.id} />
        </div>
      ) : (
        <p>Em breve novos eventos</p>
      )}
    </div>
  );
};

export default Evento;