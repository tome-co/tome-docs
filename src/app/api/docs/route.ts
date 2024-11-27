import { NextResponse } from 'next/server'
import apiSpec from '../../../data/api-docs.json' // Move JSON to src/data directory

export async function GET() {
  return NextResponse.json(apiSpec)
}