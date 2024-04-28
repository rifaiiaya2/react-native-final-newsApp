export type News = {
  _id: string;
  title: string;
  image_url: string;
  keywords: string[] | null;
  description: string;
  pubDate: string;
  source_url: string;
  source_icon: string;
};
