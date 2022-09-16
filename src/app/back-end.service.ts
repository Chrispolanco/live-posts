import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { tap } from 'rxjs/operators';

// https://live-posts-c9726-default-rtdb.firebaseio.com/

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  saveData() {
    const listOfPosts: Post[] = this.postService.getPosts();
    this.http
      .put(
        'https://live-posts-c9726-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchData() {
    this.http
      .get<Post[]>(
        'https://live-posts-c9726-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);
          
        })
      )
      .subscribe();
  }
}
