import { Request, Response, Router } from 'express'

// Controller
import MovieController from './controllers/MovieController'

// validators
import { movieCreateValidation } from './middlewares/movieValidation'
import { validator } from './middlewares/handleValidations'

const router = Router()

router.get('/test', (req: Request, res: Response) => {
  res.status(200).send('API Working!')
})

router.route('/movie')
  .get(MovieController.getAllMovies)
  .post(movieCreateValidation(), validator, MovieController.createMovie)

router.get('/movie/:movieId', MovieController.getMovieById)

export default router