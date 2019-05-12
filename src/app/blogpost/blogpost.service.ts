import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BlogPost } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private http: HttpClient) {}

  findAllBlogPost(): Observable<BlogPost[]> {
    return this.http
      .get<BlogPost[]>(`${environment.backendUrl}/api/BlogPosts`)
      .pipe(map(res => res));
  }


}
