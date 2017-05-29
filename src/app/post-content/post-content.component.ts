import {Component, OnInit} from '@angular/core';
import {PostDataService} from '../post-data.service';
import {Post} from '../post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  post: Post;
  id: string;

  constructor(private service: PostDataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route
      .params
      .subscribe(params => this.id = params['id']);

    this.service
      .fetchPost(this.id)
      .subscribe(post => this.post = post);
  }
}
