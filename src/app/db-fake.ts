import { BlogPost, Blog, Author } from './shared/models';

export const Blogs: { [key: number]: Blog } = {
  0: {
    blogId: 0,
    name: 'Angular',
    description: 'Angular Blog',
  },
};

export const BlogPosts: { [key: number]: BlogPost } = {
  0: {
    blogPostId: 0,
    blogId: 0,
    title: 'Hello Angular',
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
      'https://camo.githubusercontent.com/84fe5f1dac571664269fb219ab48f6414e002327/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f616e67756c61722d6d6174657269616c2d657874656e73696f6e732f6c696e6b2d707265766965772f6173736574732f616e67756c61722d6d6174657269616c2d657874656e73696f6e732d6c6f676f2e706e67',
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
    authorId: 2,
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
