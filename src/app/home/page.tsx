import Feed from "@/components/Feed/Feed";
import preFetchJobs from "@/lib/preFetchJobs";
import {cookies} from "next/headers";
import {redirect} from 'next/navigation'
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {UserInfo} from "@/types/index";

/**
 * The homepage where our feed of jobs (Feed Component) lives.
 * @constructor
 * @returns {Feed | undefined} Either returns the Feed with the jobs for homepage or redirects to login
 *                             on authentication or server error during initial job post fetch.
 */
//TODO: error texts on redirection on /login
export default async function Home(): Promise<JSX.Element> {
    let token: RequestCookie | undefined = cookies().get('token');
    let userInfo : UserInfo;
    // If user has no authentication token, redirect to login.
    if (typeof (token) === "undefined") {
        redirect("/login");
    } else {
        // Populate userInfo object with the info fetched from endpoint during or from previous login.
        userInfo = {
            userEmail : cookies().get('userEmail'),
            userFirstName : cookies().get('userFirstName'),
            userLastName : cookies().get('userLastName'),
        }
    }
    // Try to fetch the initial number of jobs (10) with the user's retrieved bearer token.
    let initialJobs : Array<any>;
    try {
         initialJobs = await preFetchJobs(token.value);
    } catch (error) {
        redirect("/login");
    }

    return (
        <main className="flex min-h-max flex-col items-center justify-between pt-16">
            <Feed initialJobs={initialJobs} userInfo={userInfo}/>
        </main>
    );
}


