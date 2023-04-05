import { Request, Response } from 'express'

import CinemaModel from '../models/cinema'

export const getAll = async (req: Request, res: Response) => {
  try {
    const cinemas = await CinemaModel.find().exec()

    res.json(cinemas)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get cinemas',
    })
  }
}

export const getOne = async (req: Request, res: Response) => {
  try {
    const cinemaId = req.params.id
    const cinema = await CinemaModel.findById(cinemaId).exec()

    res.json(cinema)
  } catch (err) {
    console.log(err)

    res.status(500).json({
      message: 'Failed to get cinema',
    })
  }
}
