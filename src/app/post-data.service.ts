import {Injectable} from '@angular/core';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class PostDataService {

  constructor(private http: Http) {
  }

  fetchPosts(): Observable<Post[]> {
    return this.http
      .get('/api/posts')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
