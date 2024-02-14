import {NextRequest, NextResponse} from "next/server";
import bookData from "@MOCK_DATABASE/books/all.json"
import isAuthenticated from "@/lib/isAuthenticated";
/**
 * Api route for applications to endpoint
 * @param request
 * @constructor
 */
export async function POST(request: NextRequest) {
    const body = await request.json();
    // Check if request is authenticated.
    if (!await isAuthenticated(request)) {
        return NextResponse.json({}, {status: 403});
    }
    // Mimic endpoint response.
    let endpointResponse;
    try {
        // If book exists in "database" then buy it (we would normally check for price here.)
        if (body.isbn !== undefined) {
            let endpointBookData = bookData["books"];
            // Construct a book list with Book type
            for await (const book of endpointBookData) {
                if (book.isbn === body.isbn) {
                    return NextResponse.json(
                        {},
                        {status: 200}
                    );
                }
            }
            return NextResponse.json({}, {status: 400});
        } else {
            return NextResponse.json({}, {status: 400});
        }
    } catch (error : any) {
        if (error.response?.status) {
            return NextResponse.json({}, {status: error.response.status});
        } else {
            return NextResponse.json({}, {status: 400});
        }
    }
}
