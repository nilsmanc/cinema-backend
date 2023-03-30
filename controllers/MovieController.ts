import { Request, Response } from 'express'

import MovieModel from '../models/movie'

export const getAll = async (req: Request, res: Response) => {
  try {
    const movies = await MovieModel.find().exec()

    res.json(movies)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get movies',
    })
  }
}

export const getOne = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id

    const movie = await MovieModel.findById(movieId).exec()

    res.json(movie)
  } catch (err) {
    console.log(err)

    res.status(500).json({
      message: 'Failed to get movie',
    })
  }
}

export const getCinemaMovies = async (req: Request, res: Response) => {
  const cinemaId = req.params.id
  try {
    const movies = await MovieModel.find({ cinema: { _id: cinemaId } }).populate('cinema')

    res.json(movies)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get movies',
    })
  }
}
