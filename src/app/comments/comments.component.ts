import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsReqService } from '../utils/http/comments-req.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments$: Observable<any[]>;

  constructor(private commentsReqService: CommentsReqService) {}

  ngOnInit() {
    this.comments$ = this.commentsReqService.getAllComments(10);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/