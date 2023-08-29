import { PutObjectCommandOutput } from '@aws-sdk/client-s3'

export interface IS3Service {
  uploadFile(file: Buffer, fileName: string): Promise<PutObjectCommandOutput>
}
