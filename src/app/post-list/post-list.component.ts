import { Post } from '../post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [
    new Post(
      'Catherdal',
      'To be awestruck is a common occurrance',
      '../../assets/midJourney/38.png',
      'test@test.com',
      new Date()
    ),
    new Post(
      'Festival',
      'The village gathers but once every 5 years for the festival in where worries are left for the following day',
      '../../assets/midJourney/37.png',
      'test@test.com',
      new Date()
    ),
    new Post(
      'Zelda',
      'The return home after a long journey',
      '../../assets/midJourney/36.png',
      'test@test.com',
      new Date()
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
