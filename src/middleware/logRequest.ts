// src/middleware/logRequest.ts
export function logRequest(req: Request) {
  console.log(`[${req.method}] ${req.url}`)
}
