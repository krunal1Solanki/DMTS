import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname
    console.log("PATH", path)

    const isPublic = path == '/login';

    const token = request.cookies.get("token")?.value  || '';

    if(!isPublic && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    } 
}
 
export const config = {
  matcher: ['/scheduler', '/users', '/settings', '/', '/map'],
}