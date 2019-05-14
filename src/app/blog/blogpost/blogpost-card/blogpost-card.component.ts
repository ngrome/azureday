import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BlogPost } from 'src/app/shared/models';

@Component({
  selector: 'app-blogpost-card',
  templateUrl: './blogpost-card.component.html',
  styleUrls: ['./blogpost-card.component.scss'],
})
export class BlogPostCardComponent {
  @Input() post: BlogPost;
  @Output() btnView: EventEmitter<number> = new EventEmitter<number>();

  viewDetail() {
    this.btnView.emit(this.post.blogPostId);
  }
}
