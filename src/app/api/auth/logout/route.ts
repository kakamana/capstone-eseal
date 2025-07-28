// src/app/api/auth/logout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7)
      const payload = verifyToken(token)
      
      if (payload) {
        // Create audit log
        await prisma.auditLog.create({
          data: {
            userId: payload.userId,
            action: 'USER_LOGOUT',
            details: { email: payload.email },
            ipAddress: request.ip,
            userAgent: request.headers.get('user-agent'),
          }
        })
      }
    }

    return NextResponse.json({ message: 'Logged out successfully' })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json({ message: 'Logout completed' })
  }
}