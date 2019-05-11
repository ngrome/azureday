import { Post, Level } from './post';
import { Author } from './author';

export const Posts: { [key: number]: Post } = {
  0: {
    id: 0,
    title: 'Hello Angular',
    excerpt: 'A beginner intro to Angular',
    text: 'This is the long test to the introductionary Angular World',
    level: Level.BEGINNER,
    author: 0,
  },
  1: {
    id: 1,
    title: 'Angular and Material',
    imageUrl:
      // tslint:disable-next-line:max-line-length
      'https://camo.githubusercontent.com/84fe5f1dac571664269fb219ab48f6414e002327/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f616e67756c61722d6d6174657269616c2d657874656e73696f6e732f6c696e6b2d707265766965772f6173736574732f616e67756c61722d6d6174657269616c2d657874656e73696f6e732d6c6f676f2e706e67',
    excerpt: 'A beginner intro to Angular and Material',
    text: 'This is the long test to the introductionary Angular Material',
    level: Level.MEDIUM,
    author: 1,
  },
  2: {
    id: 1,
    title: 'Angular and RxJS',
    excerpt: 'A beginner intro to Angular and RxJS',
    text: 'This is the long test to the introductionary Angular RxJS',
    level: Level.ADVANCED,
    author: 2,
  },
};

export const Authors: { [key: number]: Author } = {
  0: {
    id: 0,
    name: 'Lorenzo Franceschini',
  },
  1: {
    id: 1,
    name: 'Luciano Murruni',
  },
  2: {
    id: 2,
    name: 'Francesco Malagisi',
  },
};
