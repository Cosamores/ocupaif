import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DetalhesEvento from '../components/DetalhesEvento';
import Comentarios from '../components/Comentarios';

const Evento = () => {
  const [evento, setEvento] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Buscar os detalhes do evento pela ID da sua API ou servidor.
    // Como exemplo, vou usar alguns dados fictícios.
    const dadosFicticios = {
      imagem: '/images/evento1.png',
      nome: 'Nome do Evento 1',
      descricao: 'Descrição do Evento 1',
      data: '24/05/2023',
      local: 'Local do Evento 1',
    };

    setEvento(dadosFicticios);
  }, [id]);

  if (!evento) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <DetalhesEvento {...evento} />
      <Comentarios />
    </div>
  );
};

export default Evento;
