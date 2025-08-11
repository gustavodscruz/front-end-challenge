import { Card } from "./types/Card";
import { CardNamed } from "./types/CardNamed";

const handleBlogPosts = async (): Promise<Card[]> => {
  const URL = process.env.NEXT_PUBLIC_URL ?? "";
  const response = await fetch(URL);
  const data: Card[] = await response.json();
  return data;
};

export function mapPostToCard(post: Card): CardNamed {
  return {
    id: post.id,
    imagem: post._embedded["wp:featuredmedia"][0].source_url,
    alt: post._embedded["wp:featuredmedia"][0].alt_text,
    width: post._embedded["wp:featuredmedia"][0].media_details.width,
    height: post._embedded["wp:featuredmedia"][0].media_details.height,
    titulo: post.title.rendered,
    link: post.link,
  };
}


export { handleBlogPosts };
