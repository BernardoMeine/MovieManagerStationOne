import { Request, Response } from "express";
import { ListAllMoviesUseCase } from "./ListAllMoviesUseCase"

class ListAllMoviesController {
  constructor(private listAllMoviesUseCase: ListAllMoviesUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listAllMoviesUseCase.execute();


    return res.json(all);
  }
}

export { ListAllMoviesController }