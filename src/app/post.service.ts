import { Post } from './post';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  public _Url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http :HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 

  getPosts():Observable<Post[]>
  {
    return this.http.get<Post[]>(this._Url);
  }
  getPost(id: number): Observable<Post> {
    const url = `${this._Url}/${id}`;
    return this.http.get<Post>(url);
  }
deletePost(post: Post | number): Observable<Post> {
  const id = typeof post === 'number' ? post : post.id;
  const url = `${this._Url}/${id}`;

  return this.http.delete<Post>(url, this.httpOptions);
}
}
