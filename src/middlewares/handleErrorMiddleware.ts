import { Request, Response, NextFunction } from "express"
import Logger from "../../config/logger"

// Global error handling
export default function handleErrorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error) {
    Logger.error(error.message)
    return res.status(500).send('Ocorreu um erro no sistema, por favor tente novamente.')
  }
  next()
}