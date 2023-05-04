import React from 'react';
import Leituras from '../components/Leituras';
import VideoThumbnails from '../components/VideoThumbnails';
import Card from '../components/Card';
import styles from '../styles/Audiovisual.module.css';

const Audiovisual = () => {

  const exampleBooks = [
    {
      title: 'Pedagogia do Oprimido',
      author: 'Paulo Freire',
      url: 'https://www.amazon.com/Pedagogia-Oprimido-Portuguese-Paulo-Freire/dp/8577533271',
    },
    {
      title: 'A Universidade Necessária',
      author: 'Darcy Ribeiro',
      url: 'https://www.amazon.com.br/Universidade-Necess%C3%A1ria-Darcy-Ribeiro/dp/8532502064',
    },
    {
      title: 'As Veias Abertas da América Latina',
      author: 'Eduardo Galeano',
      url: 'https://www.amazon.com/Veias-Abertas-Am%C3%A9rica-Latina/dp/8535908068',
    },
    {
      title: 'A Sociedade do Espetáculo',
      author: 'Guy Debord',
      url: 'https://www.amazon.com/Sociedade-Espet%C3%A1culo-Guy-Debord/dp/8575596591',
    },
    {
      title: 'Poder, Estado e Educação',
      author: 'Ivanilde Apoluceno de Oliveira',
      url: 'https://www.amazon.com/Poder-Estado-Educa%C3%A7%C3%A3o-Portuguese-Brasil/dp/8574198183',
    },
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
      <Card className={styles.cardLeituras}>
        <Leituras books={exampleBooks} />
      </Card>
      <Card className={styles.cardVideos}>
        <VideoThumbnails videos={exampleVideos} />
      </Card>
    </div>
  );
};

export default Audiovisual;
