export interface Post {
  id: number;
  title: string;
  imageUrl?: string;
  excerpt: string;
  text: string;
  level: Level;
  author: number;
}

export enum Level {
  BEGINNER,
  MEDIUM,
  ADVANCED,
}
