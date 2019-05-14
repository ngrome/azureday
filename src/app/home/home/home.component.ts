import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/models';
import { BlogService } from '../../blog/blog/blog.service';
import { BlogPostService } from '../../blog/blogpost/blogpost.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Azure Day 2019';
  blogs$: Observable<Blog[]>;
  posts = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private blogPostService: BlogPostService,
  ) {}

  ngOnInit() {
    this.blogs$ = this.blogService.findAllBlog().pipe(map(blogs => blogs));
  }

  handleBlogPost(blog) {
    this.blogPostService.findAllBlogPostByBlogId(blog.blogId).subscribe(res => (this.posts = res));
  }

  handlePost(blogPostId: number) {
    this.router.navigate(['blog', blogPostId], { relativeTo: this.route });
  }
}
