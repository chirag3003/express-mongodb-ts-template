interface IJWTData {
  _id: string
  email: string
  username: string
  creator: boolean
  iat?: string
  exp?: string
}

interface IAdminJWTData {
  _id: string
  email: string
  username: string
  iat?: string
  exp?: string
}
