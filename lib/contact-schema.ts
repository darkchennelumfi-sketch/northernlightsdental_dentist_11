import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "That name is a little too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(120, "That email is a little too long."),
  phone: z
    .string()
    .trim()
    .max(30, "That phone number is a little too long.")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(2, "Please add a subject.")
    .max(120, "That subject is a little too long."),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about how we can help.")
    .max(2000, "Please keep your message under 2,000 characters."),
});

export type ContactValues = z.infer<typeof contactSchema>;
