import { NextResponse } from 'next/server'
import Joi from 'joi'

export const validateSchema = (schema: Joi.ObjectSchema) => async (req: Request) => {
  const body = await req.json()
  const { error, value } = schema.validate(body)
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })

  return { validatedBody: value }
}
