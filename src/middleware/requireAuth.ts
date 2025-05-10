// src/middleware/requireAuth.ts
import { NextResponse } from 'next/server'
import { authExclusion } from './authExclusion'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'secret'

export async function requireAuth(req: Request) {
  const url = new URL(req.url)
  const pathname = url.pathname

  // ✅ ยกเว้น path ที่กำหนดไว้
  if (authExclusion.has(pathname)) {
    return { skip: true }
  }

  // ✅ ตรวจ header หรือ cookie
  const authHeader = req.headers.get('authorization')
  const token = authHeader?.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : require('cookie').parse(req.headers.get('cookie') || '').auth_token

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const decoded = jwt.verify(token, SECRET)
    return { user: decoded } // สามารถใช้ user.role, user.id ต่อได้
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}
