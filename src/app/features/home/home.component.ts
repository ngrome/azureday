import { Component, OnInit } from '@angular/core';
import { Post, Level } from 'src/app/shared/post';
import { Posts } from 'src/app/shared/db-fake';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Azure Day 2019';
  beginnerTopics: Post[];
  mediumTopics: Post[];
  advancedTopics: Post[];

  constructor() {}

  ngOnInit() {
    const posts = Object.values(Posts);
    this.beginnerTopics = posts.filter(post => post.level === Level.BEGINNER);
    this.mediumTopics = posts.filter(post => post.level === Level.MEDIUM);
    this.advancedTopics = posts.filter(post => post.level === Level.ADVANCED);
  }
}
