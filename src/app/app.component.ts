import { Component, OnInit } from '@angular/core';
import { PostService } from '@services';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'coverage-code-and-unit-test-jasmine';
  posts: Post[] | undefined;

  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.get().subscribe({
      next: (res) => {
        this.posts = res;
      },
      error: (err: any) => {
        console.log(err.message);
      },
    });
  }
}
