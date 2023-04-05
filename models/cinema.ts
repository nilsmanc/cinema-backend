import mongoose, { Document } from 'mongoose'

export interface Cinema extends Document {
  title: string
  imageUrl: string
  description: string
  adress: string
}

const CinemaSchema = new mongoose.Schema<Cinema>({
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
  adress: {
    type: String,
    required: true,
  },
})

export default mongoose.model<Cinema>('Cinema', CinemaSchema)
