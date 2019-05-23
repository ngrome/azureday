import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Blog } from 'src/app/shared/models';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss'],
})
export class BlogAddComponent implements OnInit {
  constructor() {}

  blog: Blog;
  blogForm: FormGroup;

  ngOnInit() {
    this.blogForm = new FormGroup({
      $key: new FormControl(null),
      name: new FormControl(''),
      description: new FormControl(''),
    });
    console.log(this.getControls());
  }
  getControls() {
    const controlsArray = [];
    const keys = Object.keys(this.blogForm.controls);
    for (const prop of keys) {
      controlsArray.push(this.blogForm.controls[prop]);
    }
    console.log(controlsArray);
    return controlsArray;
  }
  handleSubmit() {
    console.log(this.blogForm.get('name').value);
    console.log(this.blogForm);
  }
}
