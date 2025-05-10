import { schemaLogin } from '@/features/auth/server/authSchema'
import { validateSchema } from '@/middleware/validateSchema'
import { requireAuth } from '@/middleware/requireAuth'
import { onLogin } from '@/features/auth/server/authController'

export async function POST(req: Request) {
  const validated = await validateSchema(schemaLogin)(req)
  if ('status' in validated) return validated

  const auth = await requireAuth(req)
  if ('status' in auth) return auth

  return await onLogin(validated.validatedBody)
}