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
      'Nature',
      'Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology',
      '../../assets/midJourney/38.png',
      'test@test.com',
      new Date()
    ),
    new Post(
      'Nature',
      'Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. Its surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area\'s numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts.',
      '../../assets/midJourney/37.png',
      'test@test.com',
      new Date()
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
