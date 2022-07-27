import { ListAllMoviesUseCase } from "./ListAllMoviesUseCase";
import { MoviesRepository } from "../../repositories/MoviesRepository";
import { ListAllMoviesController } from "./ListAllMoviesController";

const moviesRepository = MoviesRepository.getInstance();

const listAllMoviesUseCase = new ListAllMoviesUseCase(moviesRepository);

const listAllMoviesController = new ListAllMoviesController(listAllMoviesUseCase);

export { listAllMoviesController }