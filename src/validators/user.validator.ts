import { z } from 'zod'

export const createUserInputValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().trim().min(1),
  username: z.string().trim().min(6),
})

export type CreateUserInput = z.infer<typeof createUserInputValidator>
