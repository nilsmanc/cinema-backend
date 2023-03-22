import express, { Application } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { MONGODB } from './variables'

const app: Application = express()

mongoose
  .connect(MONGODB as string)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

app.use(express.json())
app.use(cors())

app.listen(4444, () => {
  console.log('Server OK')
})
