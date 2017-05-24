export class Post {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
