import { Component, OnInit } from '@angular/core';
import { Blog, BlogPost } from 'src/app/shared/models';
import { Blogs, BlogPosts } from 'src/app/db-fake';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Azure Day 2019';
  blogs: Blog[] = [];
  posts: BlogPost[] = [];

  constructor() {}

  ngOnInit() {
    this.blogs = Object.values(Blogs).map((blog: Blog) => blog);
    this.posts = Object.values(BlogPosts).map((post: BlogPost) => post);
  }
  getPosts(blogId: number) {
    return this.posts.filter((post: BlogPost) => post.blogId === blogId);
  }
}
