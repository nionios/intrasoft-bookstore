import {NextRequest, NextResponse} from "next/server";
import retrieveToken from "@/lib/retrieveToken";
import axios from "axios";

/**
 * API route to query endpoint for book entries.
 * @param request {NextRequest}
 * @constructor
 */
export async function POST(request: NextRequest) {
    const body = await request.json();

    const config = {
        url: `${process.env.endpointURL}/api/book-entries`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${retrieveToken(request)}`
        },
        params: {
            page: body.page,
            sizePerPage: body.sizePerPage,
            q: body.q,
        },
    }

    let endpointResponse;
    try {
        endpointResponse = await axios(config);
    } catch (error) {
        console.error(error);
        return NextResponse.json({}, {status: 400});
    }

    return NextResponse.json(
        {items: endpointResponse.data.items},
        {status: 200}
    );
}
