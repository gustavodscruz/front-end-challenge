import { Card } from "@/types/Card";
import { CardNamed } from "@/types/CardNamed";
import { mapPostToBlogPost } from "@/usePosts";
import Image from "next/image";
import styles from "./page.module.css";

interface PostProps {
  params: { slug: string };
}

async function getPost(slug: string) {
  const response = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
  );
  const posts: Card[] = await response.json();
  const post: Card = posts[0];
  const cardNamed: CardNamed = mapPostToBlogPost(post, true);
  return cardNamed;
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  const markup = { __html: post.content ?? "" }
  
  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={post.imagem}
          alt={post.alt}
          width={post.width}
          height={post.height}
          className={styles.image}
          priority
        />
      </div>
      <h1 className={styles.title}>{post.titulo}</h1>
      {post.data && <time className={styles.date}>{post.data}</time>}
      <div className={styles.content} dangerouslySetInnerHTML={markup}></div>
    </main>
  );
}
