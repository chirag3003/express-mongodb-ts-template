import { Request, Response } from 'express'

export interface IMediaController {
  uploadMedia(req: Request, res: Response): Promise<void>
}

export interface IMediaService {
  createMedia(data: IFile): Promise<void>
}
