export type TTrendingReport = {
  id: string;
  name: string;
  title: string;
  designation: string;
  date: string;
  imageUrl: string;
};

export type TAdd = {
  id: string;
  title: string;
  image: string;
};

export type THighlights = {
  id: string;
  category: string;
  reporter?: string;
  time: string;
  title: string;
  description: string;
  imageUrl: string;
};
