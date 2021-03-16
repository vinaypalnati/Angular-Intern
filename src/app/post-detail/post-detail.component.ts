import { Observable } from 'rxjs';
import { find } from 'rxjs/operators';
import { PostService } from './../post.service';
import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  // @Output() deletefrom=new EventEmitter();
  post:Post;
  constructor(private route: ActivatedRoute, private postService: PostService) { }
  getPost():void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }
  ngOnInit(): void {
    this.getPost();
  }

}
