// src/middleware.ts - Route protection
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { verifyToken } from './lib/auth'

// const publicRoutes = ['/', '/login', '/register']
// const authRoutes = ['/login', '/register']

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl
//   const token = request.cookies.get('token')?.value || 
//                 request.headers.get('authorization')?.replace('Bearer ', '')

//   // Check if it's a public route
//   if (publicRoutes.includes(pathname)) {
//     return NextResponse.next()
//   }

//   // Check if user is authenticated
//   if (!token) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }

//   // Verify token
//   const payload = verifyToken(token)
//   if (!payload) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }

//   // Redirect authenticated users away from auth pages
//   if (authRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL('/dashboard', request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// }

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Temporarily disable middleware to get app working
export function middleware(request: NextRequest) {
  // Allow all requests for now - we'll add auth protection later
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}