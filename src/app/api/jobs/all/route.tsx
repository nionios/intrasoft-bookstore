import {SignJWT} from "jose";
import {NextRequest, NextResponse} from "next/server";
import retrieveJWT, {getJwtSecretKey} from "@/lib/retrieveJWT";
import axios from "axios";
import reportToSocket from "next/dist/client/tracing/report-to-socket";

export async function POST(request: NextRequest) {
    const body = await request.json();

    const config = {
        url: `${process.env.endpointURL}/api/job-posts`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${retrieveJWT(request)}`
        },
        params: {
            page: body.page,
            sizePerPage: body.sizePerPage,
        },
    }

    let endpointResponse;
    try {
        endpointResponse = await axios(config);
    } catch (error) {
        console.error(error);
        return NextResponse.json({}, {status: 400});
    }

    const apiResponse = NextResponse.json(
        {items: endpointResponse.data.items},
        {status: 200}
    );

    return apiResponse;
}
