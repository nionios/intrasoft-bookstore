import {NextRequest, NextResponse} from "next/server";
import userData from "@MOCK_DATABASE/users/all.json";
import bcrypt from "bcrypt";

/**
 * API to fake the login process (an endpoint would normally be queried here.)
 * @param request {NextRequest}
 * @constructor
 * @returns apiResponse {NextResponse}
 */
export async function POST(request: NextRequest) {
    const body = await request.json();
    // 'Query' our fake Endpoint (json file) for users with the password given by login candidate.
    try {
        let apiResponse: NextResponse | undefined;
        // Iterate through users to see which one the user is.
        for await (const userEntry of userData["users"]) {
            // Password should be ilov3b00ks in plaintext.
            if (body.email === userEntry.userEmail &&
                await bcrypt.compare(body.password, userEntry.userPassword)) {
                // Make apiResponse to pass to front-end
                apiResponse = NextResponse.json(
                    {},
                    {status: 200}
                );
                // Mock a response from an endpoint that would give user info.
                const token = "4cc3ssT0k3n";
                // body.email === userEntry.userEmail
                const userEmail = userEntry.userEmail;
                const userFirstName = userEntry.userFirstName;
                const userLastName = userEntry.userLastName;
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
            }
        }
        // If no apiResponse is undefined, this means no email/password combination matched and authentication failed!
        if (apiResponse === undefined) {
            apiResponse = NextResponse.json({authFail: true});
        }
        return apiResponse;
    } catch (error) {
        console.error(error);
        return NextResponse.json({authFail: true});
    }
}
