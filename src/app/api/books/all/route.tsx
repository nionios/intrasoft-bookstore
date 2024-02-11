import {NextRequest, NextResponse} from "next/server";
import retrieveToken from "@/lib/retrieveToken";
import bcrypt from "bcrypt";
import tokenHashes from "@/../mock-endpoint/tokens/all.json";
import bookData from "@/../mock-endpoint/books/all.json";
import {Book} from "@/types";

/**
 * API route to query endpoint for book entries.
 * @param request {NextRequest}
 * @constructor
 */
export async function POST(request: NextRequest) {
    //const body = await request.json();
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
    // Check if hashes authenticated.
    if (isAuthenticated) {
        let endpointBookData = bookData["books"];
        let bookList: Book[] = [];
        // Construct a book list with Book type
        for await (const book of endpointBookData) {
            bookList.push(book);
        }
        return NextResponse.json(
            {items: bookList},
            {status: 200}
        );
    } else {
        return NextResponse.json({}, {status: 400});
    }
}
