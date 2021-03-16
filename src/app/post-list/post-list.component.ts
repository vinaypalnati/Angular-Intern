import { PostService } from './../post.service';
import {Post} from '../post';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => this.posts = data)
  }
}
