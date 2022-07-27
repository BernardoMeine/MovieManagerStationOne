import {v4 as uuidV4} from "uuid"

class Movie {
  id?: string;
  title: string;
  description: string;
  author: string;

  constructor () {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Movie };