import Feed from "@/components/Feed/Feed";
import preFetchAllJobs from "@/lib/preFetchAllJobs";
import {cookies} from 'next/headers'
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {redirect} from "next/navigation";
import populateJobBoxes from "@/lib/populateJobBoxes";


/**
 * The homepage where our feed of jobs (Feed Component) lives.
 * @constructor
 * @returns {Feed | undefined} Either returns the Feed with the jobs for homepage or redirects to login
 *                             on authentication or server error during initial job post fetch.
 */
//TODO: error texts on redirection on /login
export default async function Home(): Promise<JSX.Element> {
    const token: RequestCookie | undefined = cookies().get('token');
    // If user does not have token, redirect to login.
    if (typeof (token) === "undefined") {
        redirect("/login");
    }
    return (
        <main className="flex min-h-max flex-col items-center justify-between pt-16">
            <Feed initialJobs={populateJobBoxes(await preFetchAllJobs(token?.value))}/>
        </main>
    );
}
