import { PostService } from './../post.service';
import { Post } from '../post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.listChangedEvent.subscribe((listofPosts: Post[]) => {
      this.listOfPosts = this.postService.getPosts();
    });
  }
}
