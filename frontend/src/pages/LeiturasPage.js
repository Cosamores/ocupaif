import React from 'react';
import Leituras from '../components/Leituras';
//import VideoThumbnails from '../components/VideoThumbnails';
import Card from '../components/Card';
import styles from '../styles/Audiovisual.module.css';


const LeiturasPage = () => {

  const exampleBooks = [
    {
      title: 'Pedagogia do Oprimido',
      author: 'Paulo Freire',
      url: 'https://cpers.com.br/wp-content/uploads/2019/10/Pedagogia-do-Oprimido-Paulo-Freire.pdf',
    },
    {
      title: 'O povo brasileiro',
      author: 'Darcy Ribeiro',
      url: 'https://moodle.ifsc.edu.br/mod/resource/view.php?id=423119',
    },
    {
      title: 'As Veias Abertas da América Latina',
      author: 'Eduardo Galeano',
      url: 'https://edisciplinas.usp.br/pluginfile.php/4194484/mod_resource/content/1/As%20veias%20abertas%20da%20Am%C3%A9rica%20Latina.pdf',
    },
    {
      title: 'Quarto de despejo',
      author: "Maria Carolina de Jesus",
      url: 'https://dpid.cidadaopg.sp.gov.br/pde/arquivos/1623677495235~Quarto%20de%20Despejo%20-%20Maria%20Carolina%20de%20Jesus.pdf.pdf'

    },
    {
      title: 'Peles negras, máscaras brancas',
      author: 'Franz Fannon',
      url:'https://www.geledes.org.br/wp-content/uploads/2014/05/Frantz_Fanon_Pele_negra_mascaras_brancas.pdf'
    },
    {
      title: 'Manifesto Ciborgue: Ciência, tecnologia e feminismo-socialista no final do século XX',
      author: 'Donna J.Haraway',
      url: 'https://cochabambahotel.noblogs.org/files/2017/03/Manifesto_Ciborgue.pdf'
    }
  ];

  const exampleVideos = [
    {
      id: 'Wk-eyhPmG_U',
      title: 'Movimentos estudantis: qual a importância deles?',
      presenter: 'Nexo Jornal',
      thumbnail: 'https://i.ytimg.com/vi/Wk-eyhPmG_U/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Wk-eyhPmG_U',
    },
    {
      id: 'w6fE71Pb5Cw',
      title: 'Política estudantil e movimentos sociais',
      presenter: 'UFSCar Oficial',
      thumbnail: 'https://i.ytimg.com/vi/w6fE71Pb5Cw/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=w6fE71Pb5Cw',
    },
    {
      id: 'SsIvGd8Rh1s',
      title: 'Os movimentos estudantis no Brasil',
      presenter: 'TVT',
      thumbnail: 'https://i.ytimg.com/vi/SsIvGd8Rh1s/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=SsIvGd8Rh1s',
    },
    {
      id: 'ZxPd_rdnz-I',
      title: 'A importância do movimento estudantil na política brasileira',
      presenter: 'TVNBR',
      thumbnail: 'https://i.ytimg.com/vi/ZxPd_rdnz-I/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=ZxPd_rdnz-I',
    },
    {
      id: 'WTpCmW0o0uk',
      title: 'Por que participar do movimento estudantil?',
      presenter: 'TV Unesp',
      thumbnail: 'https://i.ytimg.com/vi/WTpCmW0o0uk/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=WTpCmW0o0uk',
    },
    {
      id: 'hS5SvNAYRk4',
      title: 'Movimento estudantil e a luta por direitos',
      presenter: 'TV USP',
      thumbnail: 'https://i.ytimg.com/vi/hS5SvNAYRk4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=hS5SvNAYRk4',
    },
  ];
  
  
  return (
    <div className={styles.container}>
      <div className={styles.LeiturasList}>
      <Card className={styles.cardLeituras}>
        <Leituras books={exampleBooks} />
      </Card>
      
{/*       <Card className={styles.cardVideos}>
        <VideoThumbnails videos={exampleVideos} />
      </Card> */}
      </div>
    </div>
  );
};

export default LeiturasPage;
