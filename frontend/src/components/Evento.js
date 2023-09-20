import React, { useState, useEffect } from 'react';
import EventoCard from './EventoCard';
import styles from '../styles/Agenda.module.css';

const Evento = () => {
  const [upcomingEvent, setUpcomingEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events'); // Using the relative path as the frontend and backend are linked.
        const data = await response.json();

        const nextEvent = data
          .sort((a, b) => new Date(a.dataComp) - new Date(b.dataComp))
          .filter(event => new Date(event.dataComp) >= new Date())[0];

        setUpcomingEvent(nextEvent);
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
