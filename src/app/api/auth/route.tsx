import {SignJWT} from "jose";
import {NextResponse} from "next/server";
import {getJwtSecretKey} from "@/lib/retrieveJWT";
import axios from "axios";
import reportToSocket from "next/dist/client/tracing/report-to-socket";

export async function POST(request) {
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
    console.log(endpointResponse);

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

    const apiResponse = NextResponse.json(
        {},
        {status: 200}
    );

    apiResponse.cookies.set({
        name: "token",
        value: token,
        path: "/",
    });

    return apiResponse;
}
