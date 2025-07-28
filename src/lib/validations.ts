// src/lib/validations.ts - Form validation schemas
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  militaryId: z.string().optional(),
  rank: z.string().optional(),
  unit: z.string().optional(),
  salary: z.number().positive().optional(),
})

export const salaryCertificateSchema = z.object({
  recipientName: z.string().min(2, 'Recipient name is required'),
  recipientEmail: z.string().email('Invalid email address'),
  purpose: z.string().min(5, 'Purpose is required'),
  file: z.any().optional(), // For file upload
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type SalaryCertificateInput = z.infer<typeof salaryCertificateSchema>