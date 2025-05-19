import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(8),
  email: z.string().email(),
  password: z.string().min(8),
});
