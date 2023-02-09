import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const validator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return next()
  }

  const extractedErrors: object[] = []

  errors.array().forEach(
    err => extractedErrors.push({ [err.param]: err.msg })
  )

  return res.status(402).json({
    errors: extractedErrors
  })
}