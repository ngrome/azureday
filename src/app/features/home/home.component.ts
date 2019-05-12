import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/models';
import { Blogs } from 'src/app/db-fake';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Azure Day 2019';
  blogs: Blog[] = [];

  constructor() {}

  ngOnInit() {
    this.blogs = Object.values(Blogs).map(blog => blog);
    console.log(this.blogs);
  }
}
