import {Injectable} from '@angular/core';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {environment} from '../environments/environment';
import {Posts} from './posts';

@Injectable()
export class PostDataService {

  constructor(private http: Http) {
  }

  fetchPosts(): Observable<Posts> {
    return this.http
      .get(environment.url + '/api/v1/posts')
      .map((res: Response) => res.json() as Posts);
  }

  fetchPost(id: string): Observable<Post> {
    return this.http
      .get(environment.url + '/api/v1/posts/' + id)
      .map(res => res.json());
  }
}
