import { Router } from 'express'

// Controller
import MovieController from './controllers/MovieController'

// validators
import { movieCreateValidation } from './middlewares/movieValidation'
import { validator } from './middlewares/handleValidations'

const router = Router()

router.route('/movie')
  .get(MovieController.getAllMovies)
  .post(movieCreateValidation(), validator, MovieController.createMovie)

router.route('/movie/:movieId')
  .get(MovieController.getMovieById)
  .delete(MovieController.deleteMovie)
  .patch(movieCreateValidation(), validator, MovieController.updateMovie)

export default router