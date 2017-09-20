import {Component, OnInit} from '@angular/core';
import {PostDataService} from '../../post-data.service';
import {Post} from '../../post';
import {Posts} from 'app/posts';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Posts;

  constructor(private service: PostDataService) {
  }

  ngOnInit() {
    this.service
      .fetchPosts()
      .subscribe(posts => {
        this.posts = posts;
        console.log(posts);
      });
  }
}
