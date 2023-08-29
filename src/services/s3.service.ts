import { IS3Service } from '@/interfaces/s3.interface'
import { getFileKey } from '@/lib/s3.lib'
import { s3 } from '@/utils/s3'
import { PutObjectCommand, PutObjectCommandOutput } from '@aws-sdk/client-s3'

export default class S3Service implements IS3Service {
  async uploadFile(
    file: Buffer,
    fileName: string
  ): Promise<PutObjectCommandOutput> {
    const command = new PutObjectCommand({
      Key: getFileKey(fileName),
      Body: file,
      Bucket: process.env.S3_BUCKET,
      ACL: 'public-read',
    })
    const image = await s3.send(command)
    return image
  }
}
