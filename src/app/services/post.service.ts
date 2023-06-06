import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  get = () => {
    let observable = this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/todos/'
    );
    return observable;
  };
}
