export interface BlogPost {
  blogPostId: number;
  blogId: number;
  title: string;
  postImageUrl?: string;
  content: string;
  slug: string;
  authorId: number;
}
