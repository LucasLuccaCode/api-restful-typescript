import express, { Request, Response } from 'express'
import config from 'config'
import routes from './routes'

const app = express()
// app port
const PORT = config.get<number>('port')

// JSON middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
app.use('/api', routes)

// default route
app.use('*', (req: Request, res: Response) => {
  res.status(400).send('Rota não encontrada')
})

// server start
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))