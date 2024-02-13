import {NextRequest, NextResponse} from "next/server";
import bookData from "@/../mock-endpoint/books/all.json";
import isAuthenticated from "@/lib/isAuthenticated";

/**
 * API route to query endpoint for book entries.
 * @param request {NextRequest}
 * @constructor
 */
export async function GET(request: NextRequest, { params }: { params: { isbn: string } } ) {
    const isbn = params.isbn;
    // If an isbn is not defined, return 400.
    if (isbn === undefined) {
        return NextResponse.json({}, {status: 400});
    }
    // Check if hashes authenticated.
    if (await isAuthenticated(request)) {
        let endpointBookData = bookData["books"];
        // Construct a book list with Book type
        for await (const book of endpointBookData) {
            if (book.isbn === isbn) {
                return NextResponse.json(
                    {item: book},
                    {status: 200}
                );
            }
        }
    }
    return NextResponse.json({}, {status: 400});
}
