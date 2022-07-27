import { RegisterMovieController } from "./RegisterMovieController";
import { MoviesRepository } from "../../repositories/MoviesRepository";
import { RegisterMovieUseCase } from "./RegisterMovieUseCase";

const movieRepository = MoviesRepository.getInstance();

const registerMovieUseCase = new RegisterMovieUseCase(movieRepository);

const registerMovieController = new RegisterMovieController(registerMovieUseCase);

export { registerMovieController }