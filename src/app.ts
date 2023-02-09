// ENV variables
require('dotenv').config()

import express, { Request, Response } from 'express'
import config from 'config'
import routes from './routes'
import db from '../config/db'

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

// connection with mongodb
db.once('open', () => {
  console.log('Connection established with database')
  app.emit('logged')
})
db.on('error', console.error.bind(console, 'connection error:'));

// server start
app.on('logged', () => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
})