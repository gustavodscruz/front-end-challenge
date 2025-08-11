import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import { CardNamed } from "@/types/CardNamed";

export default function SingleCard(post : CardNamed) {
  return (
    <div key={post.id} className={styles.card}>
      <p>{post.titulo}</p>
      <Image
        src={post.imagem}
        width={post.width}
        height={post.height}
        alt={post.alt}
        className={styles.img}
      />
    </div>
  );
}
