// src/middleware/authExclusion.ts
export const authExclusion = new Set<string>([
  '/api/auth/login',
  '/api/auth/register',
])
