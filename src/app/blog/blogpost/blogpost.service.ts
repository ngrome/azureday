import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BlogPost } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private http: HttpClient) {}
  posts: BlogPost[] = [];
  cachedData: Date;

  findAllBlogPost(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.backendUrl}/api/BlogPosts`).pipe(
      tap(res => {
        this.cachedData = moment(new Date())
          .add(8, 's')
          .toDate();
        this.posts = res;
      }),
      map(res => res),
    );
  }

  findAllBlogPostByBlogId(blogId: number): Observable<BlogPost[]> {
    const isAfter = moment(this.cachedData).isAfter(new Date());
    if (!this.posts[blogId] || !isAfter) {
      return this.findAllBlogPost().pipe(
        map(posts => posts.filter(post => post.blogId === blogId)),
      );
    } else {
      return from([this.posts.filter(post => post.blogId === blogId)]);
    }
  }

  findBlogPostById(blogPostId: number): Observable<BlogPost> {
    return this.http
      .get<BlogPost>(`${environment.backendUrl}/api/BlogPosts/${blogPostId}`)
      .pipe(tap(res => console.log(res)));
  }
}
