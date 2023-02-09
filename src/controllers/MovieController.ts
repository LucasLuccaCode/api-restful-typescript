import { Request, Response } from "express";

// Model
import { Movie } from '../models/Movie'

// Logger
import Logger from "../../config/logger";

export default class MovieController {
  static async createMovie(req: Request, res: Response) {
    try {
      const { title, rating, description, director, stars, poster } = req.body

      const data = {
        title,
        rating,
        description,
        director,
        stars,
        poster
      }

      const movie = await Movie.create(data)

      res.status(201).json(movie)
    } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      res.status(500).json({ error: "Por favor, tente mais tarde." })
    }
  }

  static async getMovieById(req: Request, res: Response) {
    try {
      const { movieId } = req.params

      const movie = await Movie.findById(movieId)

      if (!movie) {
        return res.status(404).json({ error: "O filme não existe" })
      }

      res.status(200).json(movie)
    } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      res.status(500).json({ error: "Por favor, tente mais tarde." })
    }
  }

  static async getAllMovies(req: Request, res: Response) {
    try {
      const movies = await Movie.find()

      res.status(200).json(movies)
    } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      res.status(500).json({ error: "Por favor, tente mais tarde." })
    }
  }

  static async deleteMovie(req: Request, res: Response) {
    try {
      const { movieId } = req.params

      const movie = await Movie.findById(movieId)

      if (!movie) {
        return res.status(404).json({ error: "O filme não existe" })
      }

      await movie.remove()

      res.status(200).json({ message: "Filme deletado." })
    } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      res.status(500).json({ error: "Por favor, tente mais tarde." })
    }
  }
}