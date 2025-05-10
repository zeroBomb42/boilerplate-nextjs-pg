// src/middleware/parseFormData.ts
import { NextResponse } from 'next/server'

export async function parseFormData(req: Request) {
  const contentType = req.headers.get('content-type') || ''
  if (!contentType.includes('multipart/form-data')) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 400 })
  }

  // ต้องใช้ third-party parser เช่น busboy, formidable (หากต้อง parse จริง)
  return { form: {} } // mock
}
