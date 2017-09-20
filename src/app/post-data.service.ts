import {Injectable} from '@angular/core';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {environment} from '../environments/environment';

@Injectable()
export class PostDataService {

  constructor(private http: Http) {
  }

  fetchPosts(): Observable<Post[]> {
    return this.http
      .get(environment.url + '/api/v1/posts')
      .map(res => res.json());
  }

  fetchPost(id: string): Observable<Post> {
    return this.http
      .get(environment.url + '/api/v1/posts/' + id)
      .map(res => res.json());
  }
}
