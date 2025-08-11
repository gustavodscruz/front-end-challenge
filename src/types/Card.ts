export type Card = {
  id: number;
  _embedded: {
    "wp:featuredmedia": {
      source_url: string;
      alt_text: string;
      media_details: {
        height: number;
        width: number;
      };
    }[];
  };
  title: {
    rendered: string;
  };
  link: string;
};