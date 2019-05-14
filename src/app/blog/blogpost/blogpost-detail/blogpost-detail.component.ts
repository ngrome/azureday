import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPostService } from '../blogpost.service';
import { BlogPost } from 'src/app/shared/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.scss'],
})
export class BlogPostDetailComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private blogPostSvc: BlogPostService) {}
  blogPostId: number;
  post: BlogPost;
  private sub: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.blogPostId = +params['blogPostId'];

      this.blogPostSvc.findBlogPostById(this.blogPostId).subscribe(post => (this.post = post));
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
