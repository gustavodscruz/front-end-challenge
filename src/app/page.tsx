
import { Metadata } from "next";
import styles from "./page.module.css";
import { handleBlogPosts, mapPostToCard } from "@/usePosts";
import SingleCard from "@/components/Card";
import LoadMoreButton from "@/components/LoadMoreButton";
import { CardNamed } from "@/types/CardNamed";

export const metadata: Metadata = {
  title: "Home Blog Apiki - Últimas Postagens sobre Desenvolvimento",
  description: "Confira as últimas postagens do Blog Apiki sobre desenvolvimento web, WordPress, tecnologia e programação. Conteúdo atualizado para desenvolvedores.",
  openGraph: {
    title: "Home Blog Apiki - Últimas Postagens sobre Desenvolvimento",
    description: "Confira as últimas postagens do Blog Apiki sobre desenvolvimento web, WordPress, tecnologia e programação.",
    type: "website",
  },
};

export default async function Home() {
  const data = await handleBlogPosts();
  const posts = data.map(mapPostToCard);

  return (
    <main className={styles.page}>
      <header>
        <h1 className={styles.title}>Home Blog Apiki</h1>
      </header>
      <section className={styles["main-home"]} aria-label="Últimas postagens do blog">
        <div className={styles['card-wrapper']}>
          {posts.map((post: CardNamed) => (
            <SingleCard {...post} key={post.id} /> 
          ))}
        </div>
        <LoadMoreButton />  
      </section>
    </main>
  );
}
