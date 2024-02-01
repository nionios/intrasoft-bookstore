import {SignJWT} from "jose";
import {NextResponse} from "next/server";
import {getJwtSecretKey} from "@/libs/auth";
import axios from "axios";
import reportToSocket from "next/dist/client/tracing/report-to-socket";

export async function POST(request) {
    const body = await request.json();
    const config = {
        url: 'https://ka-fe-assignment.azurewebsites.net/api/login',
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            email: body.email,
            password: body.password,
        },
    }

    try {
        const response = await axios(config);
    } catch (error) {
        console.error(error);
        return NextResponse.json({authFail: true});
    }
    console.log(response);

    return NextResponse.redirect(new URL('/home', request.url))


    // Make that below if condition as your own backend api call to validate user
    // if (body.username === "admin" && body.password === "admin") {
    // const token = await new SignJWT({
    //     username: body.username,
    //     role: "user"
    // })
    //     .setProtectedHeader({alg: "HS256"})
    //     .setIssuedAt()
    //     .setExpirationTime("30s") // Set your own expiration time
    //     .sign(getJwtSecretKey());
    //
    // const response = NextResponse.json(
    //     {success: true},
    //     {status: 200, headers: {"content-type": "application/json"}}
    // );
    //
    // response.cookies.set({
    //     name: "token",
    //     value: token,
    //     path: "/",
    // });
}
