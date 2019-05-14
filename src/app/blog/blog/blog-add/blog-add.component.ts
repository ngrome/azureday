import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Blog } from 'src/app/shared/models';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss'],
})
export class BlogAddComponent implements OnInit {
  constructor() {}

  blog: Blog;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(''),
    description: new FormControl(''),
  });

  ngOnInit() {}
}
