import { Request, Response, Router } from 'express'

// Controller
import MovieController from './controllers/MovieController'

const router = Router()

router.get('/test', (req: Request, res: Response) => {
  res.status(200).send('API Working!')
})

router.post('/movie', MovieController.createMovie)

export default router