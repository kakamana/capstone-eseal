// src/types/index.ts - TypeScript types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  militaryId?: string
  rank?: string
  unit?: string
  salary?: number
}

export interface Document {
  id: string
  type: 'SALARY_CERTIFICATE' | 'LEAVE_CERTIFICATE' | 'NOC_CERTIFICATE'
  status: 'DRAFT' | 'SUBMITTED' | 'PROCESSING' | 'ESEAL_APPLIED' | 'COMPLETED' | 'FAILED'
  recipientEmail: string
  recipientName: string
  purpose: string
  originalFile?: string
  processedFile?: string
  eSealReference?: string
  eSealAppliedAt?: Date
  createdAt: Date
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (data: RegisterInput) => Promise<void>
  logout: () => void
  loading: boolean
}