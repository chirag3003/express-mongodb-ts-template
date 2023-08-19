import { z } from 'zod'

export const createUserInputValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().trim().min(1),
  username: z.string().trim().min(6),
})

export type CreateUserInput = z.infer<typeof createUserInputValidator>

export const loginUserInputValidator = z.object({
  email: z.string().email(),
  password: z.string().trim().min(8),
})

export type LoginUserInput = z.infer<typeof loginUserInputValidator>

export const responseUserValidator = z.object({
  _id: z.any(),
  email: z.string(),
  name: z.string(),
  username: z.string(),
  creator: z.boolean(),
})

export type ResponseUser = z.infer<typeof responseUserValidator>
