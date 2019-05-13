import { Component, OnInit, Input } from '@angular/core';
import { BlogPostService } from '../../blogpost/blogpost.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/app/shared/models';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styles: [],
})
export class BlogListComponent implements OnInit {
  @Input() blogs;
  posts$: Observable<BlogPost[]>;
  constructor(private blogPostService: BlogPostService) {}

  ngOnInit() {
    this.posts$ = this.blogPostService.findAllBlogPost().pipe(map(posts => posts));
  }

  getPosts(blogId: number) {
    return this.posts$.pipe(map(posts => posts.filter(post => post.blogId === blogId)));
  }
}
