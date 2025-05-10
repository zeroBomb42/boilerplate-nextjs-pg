import { NextRequest, NextResponse } from 'next/server'
import { authExclusion } from '@/middleware/authExclusion'
import jwt from 'jsonwebtoken'

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  if (authExclusion.has(path)) return NextResponse.next()

  const token = req.cookies.get('auth_token')?.value
  if (!token) return NextResponse.json({ error: 'Unauthorized (global)' }, { status: 401 })

  try {
    jwt.verify(token, process.env.JWT_SECRET!)
    return NextResponse.next()
  } catch {
    return NextResponse.json({ error: 'Invalid token (global)' }, { status: 401 })
  }
}

export const config = {
  matcher: ['/api/:path*']
} // ตรวจเฉพาะ API