import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
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

  getPosts(){
    return this.listOfPosts; 
  }

  deletePost(index: number){
    this.listOfPosts.splice(index, 1); 
  }

  addPost(post: Post){
    this.listOfPosts.push(post); 
  }

  updatePost(index: number, post: Post){
    this.listOfPosts[index] = post; 
  }
}
