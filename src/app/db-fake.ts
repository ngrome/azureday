import { BlogPost, Blog, Author } from './shared/models';

export const Blogs: { [key: number]: Blog } = {
  0: {
    blogId: 0,
    name: 'Frontend',
    description: 'Topics on frontend dev community',
  },
  1: {
    blogId: 1,
    name: 'Backend',
    description: 'Topics on backend dev community',
  },
  2: {
    blogId: 2,
    name: 'Programming',
    description: 'General Programming Topics',
  },
  3: {
    blogId: 3,
    name: 'Others',
    description: 'Off Topics',
  },
};

export const BlogPosts: { [key: number]: BlogPost } = {
  0: {
    blogPostId: 0,
    blogId: 0,
    title: 'Hello Angular',
    postImageUrl: 'https://cdn-images-1.medium.com/max/1600/1*aYD002x4UBQ4iJCRbiKJrg.png',
    content: 'This is the long test to the introductionary Angular World',
    slug: 'http://',
    authorId: 0,
  },
  1: {
    blogPostId: 1,
    blogId: 0,
    title: 'Angular and Material',
    postImageUrl:
      // tslint:disable-next-line:max-line-length
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjZQS05wcv2GfHbCQfk3BZjGOOwcFQuqvELn9Y9cq9_7Apsti',
    content: 'This is the long test to the introductionary Angular Material',
    slug: 'http://',
    authorId: 1,
  },
  2: {
    blogPostId: 1,
    blogId: 0,
    title: 'Angular and RxJS',
    content: 'This is the long test to the introductionary Angular RxJS',
    slug: 'http://',
    postImageUrl:
      'https://malcoded.com/static/4416ca096472d7da64817eb3bd2c6687/7b279/Angular-RxJs.png',
    authorId: 2,
  },
  3: {
    blogPostId: 2,
    blogId: 0,
    title: 'Angular and NgRx',
    content: 'This is the long test to the introductionary Angular NgRx',
    slug: 'http://',
    authorId: 0,
  },
  4: {
    blogPostId: 3,
    blogId: 1,
    title: 'C#',
    content: 'This is the long test to the introductionary C#',
    slug: 'http://',
    postImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_aqs5Mv3_My27UyoTFv-sxVAJoRYgxqoSiDZUaY2_TjgiQVy',
    authorId: 0,
  },
};

export const Authors: { [key: number]: Author } = {
  0: {
    authorId: 0,
    firstName: 'Lorenzo',
    lastName: 'Franceschini',
    nickName: 'lordkenzo',
    email: 'kenzo@gmail.com',
  },
  1: {
    authorId: 1,
    firstName: 'Luciano',
    lastName: 'Murruni',
    nickName: 'mammola',
    email: 'mammala@gmail.com',
  },
  2: {
    authorId: 2,
    firstName: 'Francesco',
    lastName: 'Malagisi',
    nickName: 'gisi',
    email: 'gisi@gmail.com',
  },
};
