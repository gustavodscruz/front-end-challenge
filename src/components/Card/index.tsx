import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import { CardNamed } from "@/types/CardNamed";

export default function SingleCard(post : CardNamed) {
  return (
    <article className={styles.card}>
      <a href={post.link} title={`Leia mais sobre: ${post.titulo}`}>
        <Image
          src={post.imagem}
          width={post.width}
          height={post.height}
          alt={post.alt}
          className={styles.img}
          priority={false}
          loading="lazy"
        />
        <h2>{post.titulo}</h2>
      </a>
    </article>
  );
}
