// src/pages/index.js
import React from 'react';
import Card from '../components/Card';
import CartaAberta from '../components/CartaAberta';
import Agenda from '../components/Agenda';
import styles from '../styles/Home.module.css';

const Home = () => {
  const titulo = 'O que é o OcupaIFSP?';
  const subtitulo = 'O OcupaIFSP é um coletivo que se propõe unir os estudantes de todos os cursos do IFSP da cidade de Caraguatatuba.';
  const conteudo = `Ocupar não significa apenas tomar posse de um espaço físico. Implica em reivindicar um espaço que não é utilizado de forma plena, seja em termos físicos, políticos, sociais ou culturais. Dentro do nosso contexto estudantil é imprescindível garantir que todos os indivíduos tenham acesso igualitário à universidade pública independentemente de sua classe econômico-social, raça, etnia, gênero, orientação sexual ou deficiência. Diante disso, cabe às instituições públicas de ensino superior fornecer os meios necessários para garantir não apenas o acesso democrático dos estudantes, mas também a sua permanência e conclusão dos cursos. Chamamos esses “meios” de políticas de inclusão e assistência estudantil que vão garantir suporte socioeconômico e pedagógico, bem como combater a evasão e retenção escolar. A missão de um instituto federal é promover uma educação de qualidade para todos. TODOS. 
  Ocupar o IFSP então antes de tudo é tomar a voz ativa, o protagonismo da nossa vida estudantil e assim, juntos em coletivo,  ter maior mobilização e conquistar melhores condições de estudo e de permanência, que incluem garantias como as de acesso à alimentação, moradia, transporte e quaisquer outros recursos essenciais ou necessários para o estudante que assim as requisite.`;



  return (
    <main className={styles.main}>
        <div className={styles.leftContainer}>
        <Card >
        <CartaAberta titulo={titulo} subtitulo={subtitulo} conteudo={conteudo} />
        </Card>
        </div>
        <div className={styles.rightContainer}>
        <Card >
          <Agenda />
        </Card>
        </div>
    </main>
  );
};

export default Home;
