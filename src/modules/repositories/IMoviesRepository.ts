import { Movie } from '../model/Movie'

interface IRegisterMoviesDTO {
  title: string;
  description: string;
  author: string;
}

interface IMoviesRepository {
  findByTitle(title: string): Movie | undefined
  list(): Movie[];
  register({title, description, author}: IRegisterMoviesDTO): void;
  findMovieById(id: string): Movie | undefined
}

export { IMoviesRepository, IRegisterMoviesDTO }