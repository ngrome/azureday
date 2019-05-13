import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Blog } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  findAllBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.backendUrl}/api/blogs`).pipe(map(res => res));
  }
}
