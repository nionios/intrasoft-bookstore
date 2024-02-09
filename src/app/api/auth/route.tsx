import {NextRequest, NextResponse} from "next/server";
import axios from "axios";

/**
 * API to fake the login process (an endpoint would normally be queried here.)
 * @param request {NextRequest}
 * @constructor
 * @returns apiResponse {NextResponse}
 */
export async function POST(request : NextRequest) {
    const body = await request.json();

    let endpointResponse;
    try {
        if (body.email === "bookStoreUs3r@intrasoft.com" &&
            body.password === "ilov3b00ks") {
            // Make apiResponse to pass to front-end
            const apiResponse = NextResponse.json(
                {},
                {status: 200}
            );
            // Mock a response from an endpoint that would give user info.
            const token = "4cc3ssT0k3n";
            const userEmail = body.email;
            const userFirstName = "Benjamin";
            const userLastName = "Franklin";
            // Set the expiration date of the token to the current date + 30min, then token expires in just 30 minutes
            const expirationDate = new Date();
            expirationDate.setMinutes(expirationDate.getMinutes() + 30);

            // Set all cookies with user info.
            apiResponse.cookies.set({
                name: "token",
                value: token,
                expires: expirationDate,
                path: "/",
            });
            apiResponse.cookies.set({
                name: "userEmail",
                value: userEmail,
                expires: expirationDate,
                path: "/",
            });
            apiResponse.cookies.set({
                name: "userFirstName",
                value: userFirstName,
                expires: expirationDate,
                path: "/",
            });
            apiResponse.cookies.set({
                name: "userLastName",
                value: userLastName,
                expires: expirationDate,
                path: "/",
            });

            return apiResponse;
        } else {
            return NextResponse.json({authFail: true});
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({authFail: true});
    }
}
