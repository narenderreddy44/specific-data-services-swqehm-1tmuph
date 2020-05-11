import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsReqService {
  constructor(private data: DataService) {}

  getAllPosts(limit: number): Observable<any[]> {
    return this.data
      .getAll<any[]>(`posts`)
      .pipe(map(ret => ret.slice(0, limit)));
  }
}
