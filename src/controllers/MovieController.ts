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
      res.status(500).json({ error })
    }
  }
}