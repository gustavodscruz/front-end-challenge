
import Image from "next/image";
import styles from "./page.module.css";
import { handleBlogPosts, mapPostToCard } from "@/usePosts";
import SingleCard from "@/components/Card";
import Button from "@/components/ui/button";
import LoadMoreButton from "@/components/LoadMoreButton";
import { CardNamed } from "@/types/CardNamed";

export default async function Home() {
  const data = await handleBlogPosts();
  const posts = data.map(mapPostToCard);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Home Blog Apiki</h1>
      <div className={styles["main-home"]}>
        <div className={styles['card-wrapper']}>
          {posts.map((post: CardNamed) => (
            <SingleCard {...post} key={post.id} /> 
          ))}
        </div>
        <LoadMoreButton />  
      </div>
    </main>
  );
}
