import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from 'src/app/shared/models';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss'],
})
export class BlogpostComponent implements OnInit {
  @Input() posts: BlogPost[];

  constructor() {}

  ngOnInit() {}
}
