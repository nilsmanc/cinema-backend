import mongoose, { Document } from 'mongoose'

export interface Movie extends Document {
  title: string
  imageUrl: string
  description: string
  time: string
  genre: string
  director: string
  duration: string
  cast: string
  ageRating: string
  cinema: string
  day: string
  priceRatio: number
}

const MovieSchema = new mongoose.Schema<Movie>({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  cast: {
    type: String,
    required: true,
  },
  ageRating: {
    type: String,
    required: true,
  },
  cinema: {
    type: String,
  },
  day: {
    type: String,
  },
  priceRatio: {
    type: Number,
  },
})

export default mongoose.model<Movie>('Movie', MovieSchema)
