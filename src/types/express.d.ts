export {}

declare global {
  namespace Express {
    export interface Request {
      user: IJWTData
      admin: IAdminJWTData
      fileData: IFile
    }
  }
}
