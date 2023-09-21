//frontend/pages/EventosLista.js
import React, { useEffect, useState, useMemo } from 'react';
import EventoCard from '../components/EventoCard';
import styles from '../styles/EventosLista.module.css';

const EventosLista = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch('/.netlify/functions/get-all-events');
                const data = await response.json();
                setEventos(data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        }
        fetchEvents();
    }, []);

    const now = useMemo(() => new Date(), []);

    const eventosFuturos = useMemo(() => 
    Array.isArray(eventos) ? eventos.filter(evento => new Date(evento.dataComp) >= now) : [], 
[eventos, now]);

const eventosPassados = useMemo(() => 
    Array.isArray(eventos) ? eventos.filter(evento => new Date(evento.dataComp) < now) : [], 
[eventos, now]);


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
