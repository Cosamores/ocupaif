import React from 'react';
import Card from '../src/components/Card';
import styles from '../styles/Audiovisual.module.css';

 function Audiovisual() {
  return (
    <div className={styles.container}>
      <Card>
        <h1 className={styles.title}>Página em construção</h1>
        <p className={styles.text}>
          Estamos trabalhando duro para trazer a página de audiovisual em breve. Fique ligado!
        </p>
      </Card>
    </div>
  );
}
export default Audiovisual;