import React, { useState, useEffect } from 'react';
import EventoCard from './EventoCard';
import styles from '../styles/Agenda.module.css';

const Evento = () => {
  const [upcomingEvent, setUpcomingEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/.netlify/functions/get-all-events');
        // ... (rest of the code remains unchanged)
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
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
