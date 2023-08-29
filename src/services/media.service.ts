import { IMediaService } from '@/interfaces/media.interface'
import Media from '@/models/media.model'

export default class MediaService implements IMediaService {
  async createMedia(data: IFile): Promise<void> {
    await Media.create(data)
  }
}
