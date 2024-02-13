import {NextRequest, NextResponse} from "next/server";
import retrieveToken from "@/lib/retrieveToken";
import tokenHashes from "../../mock-endpoint/tokens/all.json";
import bcrypt from "bcrypt";

/**
 * Function to see if user token is authenticated or not
 * @param request
 * @returns {boolean}
 */
const isAuthenticated = async (request : NextRequest) => {
    const userToken: string | null | undefined = retrieveToken(request);
    if (userToken === null || userToken === undefined) {
        return NextResponse.json({}, {status: 400});
    }
    /** A flag for authentication if one of the hashes authenticates */
    let isAuthenticated: boolean = false;
    /*
     Compare the token of the user with the token from the mock endpoint. If they are matching then
     continue with returning book info. Else (when token is expired or is wrong) return 400.
     */
    for await (const tokenHashEntry of tokenHashes["token-hashes"]) {
        if (await bcrypt.compare(userToken, tokenHashEntry["hash"])) isAuthenticated = true;
    }
    return isAuthenticated;
}

export default isAuthenticated;
