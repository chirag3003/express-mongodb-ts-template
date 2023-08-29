import { IMediaController } from '@/interfaces/media.interface'
import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export default class MediaController implements IMediaController {
  async uploadMedia(req: Request, res: Response) {
    try {
      res.status(StatusCodes.CREATED).json({
        url: req.fileData.url,
      })
      return
    } catch (err) {
      console.error(err)
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}
