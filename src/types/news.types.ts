/* eslint-disable @typescript-eslint/no-explicit-any */
// Define types for our data
export interface AuthorType {
  name: string;
  designation: string;
  organization: string;
  date: string;
  avatar: any;
}

export interface NewsArticleType {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
  content: string[];
  author: AuthorType;
}
