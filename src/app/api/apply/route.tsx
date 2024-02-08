import {NextRequest, NextResponse} from "next/server";
import retrieveJWT from "@/lib/retrieveJWT";
import axios from "axios";
/**
 * Api route for applications to endpoint
 * @param request
 * @constructor
 */
export async function POST(request: NextRequest) {
    const body = await request.json();

    const config = {
        url: `${process.env.endpointURL}/api/job-posts/apply`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${retrieveJWT(request)}`
        },
        data: {
            id: body.id,
            yearsOfExperience: body.yearsOfExperience
        },
    }

    let endpointResponse;
    try {
        endpointResponse = await axios(config);
    } catch (error : any) {
        if (error.response?.status) {
            return NextResponse.json({}, {status: error.response.status});
        } else {
            return NextResponse.json({}, {status: 400});
        }
    }

    // The endpoint response will be 200 upon successful application,
    return NextResponse.json(
        {},
        {status: endpointResponse.status}
    );
}
