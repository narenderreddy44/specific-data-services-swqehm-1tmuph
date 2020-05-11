import { Component, OnInit } from '@angular/core';
import { PostsReqService } from '../utils/http/posts-req.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<any[]>;

  constructor(private postsReqService: PostsReqService) {}

  ngOnInit() {
    this.posts$ = this.postsReqService.getAllPosts(10);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/