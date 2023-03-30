import { Request, Response } from 'express'

import CinemaModel from '../models/cinema'

export const getAll = async (req: Request, res: Response) => {
  try {
    const movies = await CinemaModel.find().exec()

    res.json(movies)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get cinemas',
    })
  }
}

export const getOne = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id

    const movie = await CinemaModel.findById(movieId).exec()

    res.json(movie)
  } catch (err) {
    console.log(err)

    res.status(500).json({
      message: 'Failed to get movie',
    })
  }
}
