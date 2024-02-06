import Feed from "@/components/Feed/Feed";

import axios from "axios";
import JobBox from "@/components/JobBox/JobBox";
import {cookies} from "next/headers";
import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { redirect } from 'next/navigation'
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";

/**
 * Asynchronous function in order to pre-fetch jobs when first rendering the Home page
 * @returns {Array<JobBox>} An array of JobBox components.
 * @param token {string} The token string
 * @throws Error when user is not authorized or there is a server error
 */
const preFetchJobs = async (token: string): Promise<Array<any>> => {
    const config = {
        url: `${process.env.endpointURL}/api/job-posts`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        params: {
            page: 1,
            sizePerPage: 20,
        },
    }
    let endpointResponse;
    try {
        endpointResponse = await axios(config);
        return endpointResponse.data.items;
    } catch (error) {
        // If endpoint returns status 401 (Unauthorized), then token is invalid or expired, redirect to login page
        // to re-quthenticate.
        if (error.status === 401) {
            const thrownError = new Error("Unauthorized")
            thrownError.code = 401;
            throw thrownError;
        // If endpoint does not return 401 but another error, log error and return to login page with a message.
        } else {
            const thrownError = new Error("Server Error")
            if (typeof (error.status) !== "number") {
                thrownError.code = 500;
            } else {
                thrownError.code = error.status;
            }
            throw thrownError;
        }
    }
};


/**
 * The homepage where our feed of jobs (Feed Component) lives.
 * @constructor
 * @returns {Feed | undefined} Either returns the Feed with the jobs for homepage or redirects to login
 *                             on authentication or server error during initial job post fetch.
 */
//TODO: error texts on redirection on /login
export default async function Home(): Promise<JSX.Element> {
    let token: RequestCookie | undefined = cookies().get('token');
    // If user has no authentication token, redirect to login.
    if (typeof (token) === "undefined") {
        redirect("/login");
    }
    let initialJobs : Array<any>;
    try {
         initialJobs = await preFetchJobs(token.value);
    } catch (error) {
        redirect("/login");
    }

    return (
        <main className="flex min-h-max flex-col items-center justify-between pt-16">
            <Feed initialJobs={initialJobs}/>
        </main>
    );
}


