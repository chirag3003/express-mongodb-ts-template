declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      MONGODB_URI: string
      JWT_SECRET: string
      ADMIN_JWT_SECRET: string
      S3_ACCESS_KEY: string
      S3_SECRET_KEY: string
      S3_REGION: string
      S3_BUCKET: string
      S3_ENDPOINT: string
      S3_OBJECT_URL: string
      S3_OBJECT_FOLDER: string
    }
  }
}

export {}
