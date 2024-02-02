import {SignJWT} from "jose";
import {NextRequest, NextResponse} from "next/server";
import {getJwtSecretKey} from "@/lib/retrieveJWT";
import axios from "axios";
import reportToSocket from "next/dist/client/tracing/report-to-socket";

/**
 * API to call endpoint to login usesr and get JWT token, which is then stored in cookies with response.
 * @param request {NextRequest}
 * @constructor
 * @returns apiResponse {NextResponse}
 */
export async function POST(request : NextRequest) {
    const body = await request.json();
    const config = {
        url: `${process.env.endpointURL}/api/login`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            email: body.email,
            password: body.password,
        },
    }

    let endpointResponse;
    try {
        endpointResponse = await axios(config);
    } catch (error) {
        console.error(error);
        return NextResponse.json({authFail: true});
    }
    // Encode token in order to sign it
    /*
    const encodedToken = new TextEncoder().encode(endpointResponse.data.token.accessToken);
    const expirationDate = new Date(endpointResponse.data.token.expiresIn);

    const token = await new SignJWT({
        username: endpointResponse.data.email,
        role: "user"
    })
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime(expirationDate) // Set expiration time
        .sign(encodedToken);
    */

    // Make apiResponse to pass to front-end
    const apiResponse = NextResponse.json(
        {},
        {status: 200}
    );
    // Get relevant info from endpoint response (token string and expiration date)
    //TODO: cookies for user and user id etc.
    const token = endpointResponse.data.token.accessToken;
    const expirationDate = new Date(endpointResponse.data.token.expiresIn);

    apiResponse.cookies.set({
        name: "token",
        value: token,
        expires: expirationDate,
        path: "/",
    });

    return apiResponse;
}
