import { Component, OnInit } from '@angular/core';
import { Blog, BlogPost } from 'src/app/shared/models';
import { BlogService } from '../../blog/blog/blog.service';
import { BlogPostService } from '../../blog/blogpost/blogpost.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Azure Day 2019';
  blogs$: Observable<Blog[]>;


  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogs$ = this.blogService.findAllBlog().pipe(map(blogs => blogs));
    /*this.blogPostService.findAllBlog().subscribe(res => {
      this.posts = Object.values(res).map((post: BlogPost) => post);
    });*/

  }

}
