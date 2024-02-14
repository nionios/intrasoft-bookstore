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
    const body = await request.json();

    // Check if hashes authenticated.
    if (await isAuthenticated(request)) {
        let endpointBookData = bookData["books"];
        let bookList: Book[] = [];
        // Construct a book list with Book type
        for await (const book of endpointBookData) {
            // If user has a query search for the keyword in book fields that make sense to search for.
            if (body.q !== undefined) {
                if (book.isbn.includes(body.q) ||
                    book.title.includes(body.q) ||
                    book.subtitle.includes(body.q) ||
                    book.author.includes(body.q) ||
                    book.publisher.includes(body.q) ||
                    book.published.includes(body.q) ||
                    book.description.includes(body.q) ||
                    book.website.includes(body.q)
                ) {
                    bookList.push(book)
                }
            } else {
                bookList.push(book);
            }
        }
        return NextResponse.json(
            {items: bookList},
            {status: 200}
        );
    } else {
        return NextResponse.json({}, {status: 400});
    }
}
