import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog, BlogPost } from 'src/app/shared/models';
import { BlogPostService } from '../../blogpost/blogpost.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  @Input() blogs;
  @Output() blogClicked: EventEmitter<Blog> = new EventEmitter<Blog>();
  @Output() postClicked: EventEmitter<BlogPost> = new EventEmitter<BlogPost>();
  @Input() posts = [];
  isLoading = true;

  constructor(private blogPostService: BlogPostService) {}

  selectedBlog({ index }) {
    this.isLoading = false;
    this.blogClicked.emit(this.blogs[index]);
  }

  handleSelectedPost(post: BlogPost) {
    this.postClicked.emit(post);
  }
}
