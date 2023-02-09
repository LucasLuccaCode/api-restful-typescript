import express, { Request, Response } from 'express'
import config from 'config'

const app = express()
const PORT = config.get<number>('port')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Home')
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))