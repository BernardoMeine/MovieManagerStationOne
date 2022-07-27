import { Movie } from '../model/Movie';
import { IMoviesRepository, IRegisterMoviesDTO } from './IMoviesRepository';

class MoviesRepository implements IMoviesRepository {
  private movies: Movie[] = [];

  private static INSTANCE: MoviesRepository;

  private constructor() {
    this.movies = [];
  }

  public static getInstance(): MoviesRepository {
    
    if(!MoviesRepository.INSTANCE) {
      MoviesRepository.INSTANCE = new MoviesRepository();
    }

    return MoviesRepository.INSTANCE;
  }

  register({  title, author, description}: IRegisterMoviesDTO):void {
    const movie = new Movie();

    Object.assign(movie, {
     title, 
     description, 
     author
    });

    this.movies.push(movie);
  }

  list(): Movie[] {
    return this.movies;
  };

  findByTitle(title:string): Movie | undefined {
    const movie = this.movies.find(movie => movie.title === title);

    return movie;
  }

  findMovieById(id:string): Movie | undefined {
    const movie = this.movies.find(movie => movie.id === id);

    return movie;
  }
}

export { MoviesRepository } 