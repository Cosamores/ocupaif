import React, { useEffect, useState, useMemo } from 'react';
import EventoCard from '../components/EventoCard';
import styles from '../styles/EventosLista.module.css';

const EventosLista = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch('/.netlify/functions/events');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setEventos(data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        }
        fetchEvents();
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
