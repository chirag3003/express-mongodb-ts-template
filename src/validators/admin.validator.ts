import { z } from 'zod'

export const createAdminInputValidator = z.object({
  email: z.string().email(),
  contact: z.number(),
  password: z.string().min(8).default('password'),
  name: z.string().trim().min(1),
  username: z.string().trim().min(6),
})

export type CreateAdminInput = z.infer<typeof createAdminInputValidator>
