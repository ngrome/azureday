import { Component, OnInit } from '@angular/core';
import { Blog, BlogPost } from 'src/app/shared/models';
import { BlogService } from '../../blog/blog.service';
import { BlogPostService } from '../../blogpost/blogpost.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Azure Day 2019';
  blogs$: Observable<Blog[]>;
  posts$: Observable<BlogPost[]>;

  constructor(private blogService: BlogService, private blogPostService: BlogPostService) {}

  ngOnInit() {
    this.blogs$ = this.blogService.findAllBlog().pipe(map(blogs => blogs));
    /*this.blogPostService.findAllBlog().subscribe(res => {
      this.posts = Object.values(res).map((post: BlogPost) => post);
    });*/
    this.posts$ = this.blogPostService.findAllBlogPost().pipe(map(posts => posts));
  }
  getPosts(blogId: number) {
    return this.posts$.pipe(map(posts => posts.filter(post => post.blogId === blogId)));
  }
}
