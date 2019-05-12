import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from 'src/app/shared/models';
import { Observable, BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss'],
})
export class BlogpostComponent implements OnInit {
  private _data = new BehaviorSubject<BlogPost[]>([]);
  @Input()
  set data(value) {
    this._data.next(value);
  }

  get data() {
    return this._data.getValue();
  }
  @Input() posts$: Observable<BlogPost[]>;
  posts: BlogPost[];
  constructor() {}

  ngOnInit() {
    this._data.pipe(takeWhile(() => !this.posts)).subscribe(x => {
      this.posts = this.data;
    });
    // this.posts$.subscribe(res => (this.posts = res));
  }
}
