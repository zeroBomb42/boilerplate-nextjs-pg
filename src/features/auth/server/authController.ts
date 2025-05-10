import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export async function onLogin({ email, password }: { email: string; password: string }) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }
  return NextResponse.json({ message: 'Logged in', user: { id: user.id, email: user.email } })
}
