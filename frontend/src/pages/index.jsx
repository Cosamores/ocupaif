// src/pages/index.js
import React from 'react';
import Card from '../components/Card';
import CartaAberta from '../components/CartaAberta';
import Evento from '../components/Evento';
import styles from '../styles/Home.module.css';
import Convite from '@/components/Convite';

const Home = () => {
  const titulo = 'Carta Aberta';
  const subtitulo = 'O que é esse movimento, afinal? O OcupaIF é um coletivo independente que se propõe a unir estudantes de todos os cursos do IFSP do campus de Caraguatatuba.';
  const conteudo = `Ocupar não significa apenas tomar posse de um espaço físico. Implica em reivindicar um espaço que não é utilizado de forma plena, seja em termos físicos, políticos, sociais ou culturais. Dentro do nosso contexto estudantil, é imprescindível garantir que todos os indivíduos tenham acesso igualitário à universidade pública independentemente de sua classe econômico-social, raça, etnia, gênero, orientação sexual ou deficiência. Diante disto, cabe às instituições públicas de ensino superior e ao governo federal fornecerem aos estudantes os meios necessários que garantam não apenas acesso um amplo e democrático, mas também a sua permanência e conclusão dos cursos. Chamamos esses “meios” de políticas de inclusão e assistência estudantil que vão garantir suporte socioeconômico e pedagógico, bem como combater a evasão e retenção escolar. A missão de um instituto federal é promover uma educação de qualidade para todos. TODOS. 
  Ocupar o IFSP então, antes de tudo, é tomar a voz ativa, o protagonismo da nossa vida estudantil e assim, juntos em coletivo,  termos maior mobilização e conquistar melhores condições de estudo e de permanência, que incluem garantias como as de acesso à alimentação, moradia, transporte e quaisquer outros recursos essenciais ou necessários para o estudante que assim as requisite.`
  const convidamos = `Convidamos todos os estudantes a se juntarem a nós na construção deste coletivo, pois somente com a união de esforços poderemos lutar por nossas pautas e defender nossos interesses. Juntos, podemos ocupar plenamente este espaço público e garantir uma educação de qualidade para todos. Participe da nossa programação e venha fazer parte dessa transformação! Lembre-se de que sua voz é importante e pode fazer a diferença para construirmos um IFSP mais inclusivo e justo. Venha fazer parte desse movimento conosco!`
  const conteudoConvidamos = convidamos.replace(
    /ocupar/g,
    '<strong className="styles.convidamos" style="color: #014e01; text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white; font-weight: 600;">ocupar</strong>');
  

  return (

    <main className={styles.main}>
      <div className={styles.homeContainer}>
        <Card className={styles.card}>
          <Convite className={styles.convidamos} conteudo={convidamos} />
        </Card>
        <Card className={styles.card} id="carta">
        <CartaAberta titulo={titulo} subtitulo={subtitulo} conteudo={conteudo}/>
        </Card>
        <Card className={styles.card} id="evento">
          <Evento />
        </Card>
        </div>
    </main>
  );
};

export default Home;
