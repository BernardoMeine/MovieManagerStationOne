import { Router } from 'express';

import { MoviesRepository } from '../modules/repositories/MoviesRepository'
import { registerMovieController } from '../modules/useCases/RegisterMovie'
import { listAllMoviesController } from '../modules/useCases/ListAllMovies';

const moviesRoutes = Router();
const moviesRepository = MoviesRepository.getInstance();

// =========================== ROUTES ================================================

moviesRoutes.post("/", (req, res) => {
  return registerMovieController.handle(req, res);
});

moviesRoutes.get("/", (req, res) => {
 return listAllMoviesController.handle(req, res);
});

moviesRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  const movieId = moviesRepository.findMovieById(id);

  if(!movieId) {
    return res.status(400).json({ error: "Invalid ID"})
  }

  return res.status(201).json(movieId);
});

export { moviesRoutes }


