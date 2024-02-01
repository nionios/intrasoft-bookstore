import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import {useAuth} from "@/provider/authProvider";
import {verifyJWT} from "@/lib/verifyJWT";

/**
 * Retrieves the token from cookies from request cookies.
 * @returns {string | null}
 */
const retrieveToken = () => {
    let retrievedToken;
    if (req.cookies.has("token")) {
        retrievedToken = req.cookies.get("token")?.value;
    } else if (req.headers.get("Authorization")?.startsWith("Bearer ")) {
        retrievedToken = req.headers.get("Authorization")?.substring(7);
    } else {
        retrievedToken = null;
    }
    return retrievedToken;
}

const verifyToken = async (token) => {
    try {
        if (token) {
            const { payload } = await verifyJWT<{ payload: string }>(token);
        }
    } catch (error) {
        if (req.nextUrl.pathname.startsWith("/api")) {
            return getErrorResponse(401, "Token is invalid or user doesn't exists");
        }
        return false;
    }
    if (payload) return true;
}


/**
 * This is our middleware to ensure no protected route (everything except /login) is being accessed without auth.
 * @param request
 */
export async function middleware(request: NextRequest) {

    const token = retrieveToken();
    // If token comes back null, then redirect to login.
    // If token exists and is retrieved successfully, try to verify it. If verifying fails, redirect to /login
    if (!token || await !verifyToken(token)) {
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
