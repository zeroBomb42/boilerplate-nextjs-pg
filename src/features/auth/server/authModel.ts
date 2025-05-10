import { prisma } from '@/lib/prisma'

export const findUserByEmail = (email: string) => prisma.user.findUnique({ where: { email } })
export const createUser = (data: { email: string; password: string; name: string }) => prisma.user.create({ data })
