import { IMoviesRepository } from "../../repositories/IMoviesRepository";

interface IRequest {
  title: string;
  description: string;
  author: string;
}

class RegisterMovieUseCase {
  constructor(private moviesRepository: IMoviesRepository) {}

  execute({ title, description, author}: IRequest): void {
    const movieAlreadyExists = this.moviesRepository.findByTitle(title);

    if (movieAlreadyExists) {
      throw new Error("Movie already posted");
    }

    this.moviesRepository.register({ title, description, author})
  }
}

export { RegisterMovieUseCase }
