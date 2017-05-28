import {Component, Input, OnInit} from '@angular/core';
import {PostDataService} from '../post-data.service';
import {Post} from '../post';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  post: Post;

  constructor(private service: PostDataService) {
  }

  ngOnInit() {
    this.service
      .fetchPost("dvdf")
      .subscribe(post => this.post = post);
  }
}
