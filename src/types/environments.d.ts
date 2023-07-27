declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      MONGODB_URI: string
    }
  }
}

export {}
