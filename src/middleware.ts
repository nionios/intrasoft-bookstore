import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import retrieveJWT from "@/lib/retrieveJWT";


/**
 * This middleware to ensure no protected route (everything except /login) is being accessed without a token
 * at hand. The token might be wrong, but then content will not be loaded on pages anyway.
 * @param request
 * @returns {NextRequest}
 */
export async function middleware(request: NextRequest) {
    const token = retrieveJWT(request);
    // If token comes back null, then redirect to login.
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    } else {
        // If all is well then go on to page requested.
        return NextResponse.next();
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - login (login page)
         * - logout (logout page)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|login|logout|_next/static|_next/image|favicon.ico).*)',
    ],
}
