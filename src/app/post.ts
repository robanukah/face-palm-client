export class Post {
  _id: string;
  title: string;
  description: string;
  content: string;
  avatar: string;
  date: string;
  author: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
