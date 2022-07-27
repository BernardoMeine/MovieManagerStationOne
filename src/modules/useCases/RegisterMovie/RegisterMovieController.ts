import { Request, Response } from "express";
import { RegisterMovieUseCase} from "./RegisterMovieUseCase"

class RegisterMovieController {
  constructor(private registerMovieUseCase: RegisterMovieUseCase) {}

  handle(req: Request, res: Response): Response {
    const { title, description, author, roles } = req.body;

    this.registerMovieUseCase.execute({ title, description, author})

    return res.status(201).json();
  }
}

export { RegisterMovieController }