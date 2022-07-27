import { Movie } from "../../model/Movie";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

class ListAllMoviesUseCase {
  constructor(private moviesRepository: IMoviesRepository) {}

  execute(): Movie[] {
    const movies = this.moviesRepository.list();

    return movies;
  }
}

export { ListAllMoviesUseCase } 