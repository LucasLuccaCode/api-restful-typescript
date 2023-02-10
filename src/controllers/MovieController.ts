import { Request, Response } from "express";

// Model
import { Movie } from '../models/Movie'

// Logger
import Logger from "../../config/logger";

export default class MovieController {
  static async createMovie(req: Request, res: Response): Promise<Response> {
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

      return res.status(201).json(movie)
    } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      return res.status(500).json({ error: "Por favor, tente mais tarde." })
    }
  }

  static async getMovieById(req: Request, res: Response): Promise<Response> {
    try {
      const { movieId } = req.params

      const movie = await Movie.findById(movieId)

      if (!movie) {
        return res.status(404).json({ error: "Filme não encontrado." })
      }

      return res.status(200).json(movie)
    } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      return res.status(500).json({ error: "Por favor, tente mais tarde." })
    }
  }

  static async getAllMovies(req: Request, res: Response): Promise<Response> {
    try {
      const movies = await Movie.find()

      return res.status(200).json(movies)
    } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      return res.status(500).json({ error: "Por favor, tente mais tarde." })
    }
  }

  static async deleteMovie(req: Request, res: Response): Promise<Response> {
    try {
      const { movieId } = req.params

      const movie = await Movie.findByIdAndDelete(movieId)

      if (!movie) {
        return res.status(404).json({ error: "Filme não encontrado." })
      }

      return res.status(200).json({ message: "Filme deletado." })
    } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      return res.status(500).json({ error: "Por favor, tente mais tarde." })
    }
  }


  static async updateMovie(req: Request, res: Response): Promise<Response> {
    try {
      const { movieId } = req.params
      const { title, rating, description, director, stars, poster } = req.body

      const data = {
        title,
        rating,
        description,
        director,
        stars,
        poster
      }

      const updatedMovie = await Movie.findByIdAndUpdate(
        movieId,
        data,
        { new: true }
      )

      if (!updatedMovie) {
        return res.status(404).json({ error: 'Filme não encontrado.' });
      }

      return res.status(200).json(updatedMovie)
    } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      return res.status(500).json({ error: "Por favor, tente mais tarde." })
    }
  }
}