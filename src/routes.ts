import { Request, Response, Router } from 'express'

// Controller
import MovieController from './controllers/MovieController'

// validators
import { validator } from './middlewares/handleValidations'

const router = Router()

router.get('/test', (req: Request, res: Response) => {
  res.status(200).send('API Working!')
})

router.post('/movie', validator, MovieController.createMovie)

export default router