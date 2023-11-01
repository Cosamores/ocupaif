import React from "react";
import styles from "../styles/DetalhesEvento.module.css";
import Comentarios from "./Comentarios";
import Image from "next/image";

const DetalhesEvento = ({ imagem, nome, descricao, data, local, _id }) => {
  return (
    <div className={styles.detalhesEvento}>
      <Image
        className={styles.imagem}
        src={imagem}
        alt={nome}
        width={500}
        height={300}
      />
      <h2 className={styles.nome}>{nome}</h2>
      <p className={styles.descricao}>{descricao}</p>
      <p className={styles.data}>{data}</p>
      <p className={styles.local}>{local}</p>
      <Comentarios eventoId={_id} />
    </div>
  );
};

export default DetalhesEvento;
