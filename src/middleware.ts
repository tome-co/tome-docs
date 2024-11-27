import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface Credential {
  username: string;
  password: string;
}

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    // Parse credentials from environment variable
    const credentials: Credential[] = JSON.parse(process.env.AUTH_CREDENTIALS || '[]')
    
    const isValidUser = credentials.some(
      (cred) => cred.username === user && cred.password === pwd
    )

    if (isValidUser) {
      return NextResponse.next()
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

export const config = {
  matcher: '/:path*',
}