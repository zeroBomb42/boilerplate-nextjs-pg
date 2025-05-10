// src/middleware/checkRole.ts
import { NextResponse } from 'next/server'

export function checkRole(user: any, roles: string[]) {
  if (!roles.includes(user.role)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  return null // pass
}
