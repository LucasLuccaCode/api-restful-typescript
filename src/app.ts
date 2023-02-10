// ENV variables
require('dotenv').config()

import express, { Request, Response } from 'express'

// routes
import routes from './routes'

// middlewares
import morganMiddleware from './middlewares/morganMiddleware'

// config
import config from 'config'
import db from '../config/db'
import Logger from '../config/logger'

const app = express()
const PORT = config.get<number>('port')

// JSON middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// morgan
app.use(morganMiddleware)

// routes
app.use('/api', routes)

// default route
app.use('*', (req: Request, res: Response) => {
  res.status(400).send('Rota não encontrada')
})

// connection with mongodb
db.once('open', () => {
  Logger.info('Connection established with database')
  app.emit('logged')
})

db.on('error', (error: Error) => {
  Logger.error(`connection error: ${error.message}`)
})

// server start
app.on('logged', () => {
  app.listen(PORT, () => Logger.info(`Server listening on port ${PORT}`))
})