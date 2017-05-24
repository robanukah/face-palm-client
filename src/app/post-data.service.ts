import {Injectable} from '@angular/core';
import {Post} from './post';

@Injectable()
export class PostDataService {

  posts: Post[] = [];

  constructor() {
  }

  createPost(post: Post): PostDataService {
    this.posts.push(post);
    return this;
  }

  getAllPosts(): Post[] {
    return this.posts;
  }
}
