import express, { Application } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { MONGODB } from './variables'
import { CinemaController, MovieController } from './controllers'

const app: Application = express()

mongoose
  .connect(MONGODB as string)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

app.use(express.json())
app.use(cors())

app.get('/movies', MovieController.getAll)
app.get('/movies/:id', MovieController.getOne)
app.get('/movies/cinema/:id', MovieController.getCinemaMovies)

app.get('/cinemas', CinemaController.getAll)
app.get('/cinemas/:id', CinemaController.getOne)

app.listen(4444, () => {
  console.log('Server OK')
})
