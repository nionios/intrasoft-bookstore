import type {NextRequest} from "next/server";

/**
 * Retrieves the token from cookies from request cookies.
 * @param request {NextRequest} The request that triggers the middleware
 * @returns {string | null}
 */
export default function retrieveJWT(request: NextRequest) {
    let retrievedToken;
    if (request.cookies.has("token")) {
        retrievedToken = request.cookies.get("token")?.value;
    } else if (request.headers.get("Authorization")?.startsWith("Bearer ")) {
        retrievedToken = request.headers.get("Authorization")?.substring(7);
    } else {
        retrievedToken = null;
    }
    return retrievedToken;
}
