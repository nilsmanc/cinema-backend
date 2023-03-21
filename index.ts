import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.listen(4444, () => {
  console.log('Server OK')
})
