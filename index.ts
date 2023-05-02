import express, { Application } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { CinemaController, MovieController } from './controllers'

const app: Application = express()

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

app.use(express.json())
app.use(cors())

app.get('/movies', MovieController.getAll)
app.get('/movies/:id', MovieController.getOne)
app.get('/movies/cinema/:id', MovieController.getCinemaMovies)

app.get('/cinemas', CinemaController.getAll)
app.get('/cinemas/:id', CinemaController.getOne)

app.listen(process.env.PORT || 4444, () => {
  console.log('Server OK')
})
