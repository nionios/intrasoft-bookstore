import {NextRequest, NextResponse} from "next/server";
import bookData from "@/../mock-endpoint/books/all.json";
import {Book} from "@/types";
import isAuthenticated from "@/lib/isAuthenticated";

/**
 * API route to query endpoint for book entries.
 * @param request {NextRequest}
 * @constructor
 */
export async function POST(request: NextRequest) {
    // Check if hashes authenticated.
    if (await isAuthenticated(request)) {
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
