import {NextRequest, NextResponse} from "next/server";
import bookData from "@/../mock-endpoint/books/all.json"
import isAuthenticated from "@/lib/isAuthenticated";
import * as fs from "fs";

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
        // Check if all inputs are valid. Client-side should stop an invalid request, but someone might
        // circumvent client by sending authenticated POST requests without the use of a browser.
        if (
            body.isbn === undefined ||
            body.title === undefined ||
            body.subtitle === undefined ||
            body.author === undefined ||
            body.published === undefined ||
            body.publisher === undefined ||
            body.pages === undefined ||
            body.description === undefined ||
            body.website === undefined ||
            body.price === undefined ||
            body.rating === undefined) {
            return NextResponse.json({}, {status: 400});
            // Next check is for empty required fields.
        } else if (
                body.isbn === "" ||
                body.title === "" ||
                body.author === "" ||
                body.published === "" ||
                body.publisher === "" ||
                body.pages === "" ||
                body.website === "" ||
                body.price === "" ||
                body.rating === "") {
            return NextResponse.json({}, {status: 400});
        } else {
            // If book exists in mock database then do not re-create it
            let endpointBookData = bookData["books"];
            // Construct a book list with Book type
            for await (const book of endpointBookData) {
                if (book.isbn === body.isbn) {
                    return NextResponse.json(
                        {},
                        {status: 409}
                    );
                }
            }
            // Create a new book json and push it into the mock database
            const newBook: {
                website: string;
                pages: number;
                author: string;
                price: number;
                isbn: string;
                subtitle: string;
                rating: number;
                publisher: string;
                description: string;
                published: string;
                title: string
            } =
                {
                    "isbn": body.isbn,
                    "title": body.title,
                    "subtitle": body.subtitle,
                    "author": body.author,
                    "published": body.published,
                    "publisher": body.publisher,
                    "pages": body.pages,
                    "description": body.description,
                    "website": body.website,
                    "price": body.price,
                    "rating": body.rating,
                };
            // Construct a new book json for mock database.
            const newBookJson = {
                "books": bookData["books"].push(newBook)
            }
            fs.writeFileSync("../../../../../../mock-endpoint/books/all.json", JSON.stringify(newBookJson));

            // If all checks are passed, then notify user the book is saved. Return isbn for redirection to book page.
            return NextResponse.json({isbn: body.isbn}, {status: 200});
        }
    } catch (error: any) {
        if (error.response?.status) {
            return NextResponse.json({}, {status: error.response.status});
        } else {
            // If this is reached, what happened is definitely a server error.
            return NextResponse.json({}, {status: 500});
        }
    }
}
