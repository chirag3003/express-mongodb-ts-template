import { v4 as uuidv4 } from 'uuid'

export const getFileKey = (fileName: string) => {
  return `${process.env.S3_OBJECT_FOLDER}/${fileName}`
}

export const getFileUrl = (filename: string) => {
  return `${process.env.S3_OBJECT_URL}/${getFileKey(filename)}`
}

export const modifyFileName = (filename: string) => {
  return `${uuidv4()}-${filename}`
}
