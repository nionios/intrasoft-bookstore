import { jwtVerify } from "jose";

/**
 * Helper function to get the JWT secret key from environment variables.
 * @returns {string | undefined} The encoded secret key.
 * @throws {Error} on token not existing/matching with environment variables.
 */
export const getJwtSecretKey = () => {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
    if (!secret) { throw new Error("JWT Secret Key is not matched or does not exist."); }
    return new TextEncoder().encode(secret);
}

/**
 * Function that validates input token with the secret key
 * @param inputToken The token that the function will try to validate.
 * @returns {T | undefined} depending with what type is it called.
 * @throws {Error} on token expiration
 */
export const verifyJWT = async <T>(inputToken: string): Promise<T> => {
    try {
        return (await jwtVerify(inputToken, getJwtSecretKey())).payload as T;
    } catch (error) {
        console.log(error);
        throw new Error("JWT Token has Expired.");
    }
};
