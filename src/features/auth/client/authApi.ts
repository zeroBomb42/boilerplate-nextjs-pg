// 📄 src/features/auth/client/authApi.ts
export async function login(data: { email: string; password: string }) {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const result = await res.json()

    if (!res.ok) {
      return { success: false, message: result.error || 'Login failed' }
    }

    return { success: true }
  } catch (err) {
    return { success: false, message: 'Network error' }
  }
}
