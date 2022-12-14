import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter(); 

  listOfPosts: Post[] = [
    // new Post(
    //   'Catherdal',
    //   'To be awestruck is a common occurrance',
    //   '../../assets/midJourney/38.png',
    //   'test@test.com',
    //   new Date(),
    //   5
    // ),
    // new Post(
    //   'Festival',
    //   'The village gathers but once every 5 years for the festival in where worries are left for the following day',
    //   '../../assets/midJourney/37.png',
    //   'test@test.com',
    //   new Date(),
    //   2
    // ),
    // new Post(
    //   'Zelda',
    //   'The return home after a long journey',
    //   '../../assets/midJourney/36.png',
    //   'test@test.com',
    //   new Date(),
    //   3
    // ),
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

  getPost(index: number){
    return this.listOfPosts[index]; 
  }

  likePost(index: number){
    this.listOfPosts[index].numberOfLikes += 1; 
  }

  setPosts(listOfPosts: Post[]){
    this.listOfPosts = listOfPosts
    this.listChangedEvent.emit(listOfPosts); 
  }
}
