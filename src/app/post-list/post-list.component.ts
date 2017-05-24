import {Component, OnInit} from '@angular/core';
import {PostDataService} from '../post-data.service';
import {Post} from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private service: PostDataService) {
  }

  ngOnInit() {
    this.service
      .fetchPosts()
      .subscribe(data => this.posts = data);
  }
}
