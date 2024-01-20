import React from "react";
import styles from "../styles/DetalhesEvento.module.css";
import Comentarios from "./Comentarios";
import Image from "next/image";

const DetalhesEvento = ({ imagem, nome, descricao, data, local, eventoId }) => {
  console.log(`EventoId no DetalhesEvento: ${eventoId}`)
  return (
    <div className={styles.detalhesEvento}>
      <div className={styles.eventHeader}>
        <Image
          className={styles.imagem}
          src={imagem}
          alt={nome}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.eventBody}>
        <h2 className={styles.nome}>{nome}</h2>
        <p className={styles.descricao}>{descricao}</p>
        <p className={styles.data}>{data} </p>
        <p className={styles.local}>Local: {local}</p>
      
        <Comentarios eventoId={eventoId} className={styles.comentarios} />
      </div>
    </div>
  );
};

export default DetalhesEvento;
