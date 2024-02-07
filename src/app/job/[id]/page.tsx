import JobApplicationForm from "@/components/JobApplicationForm/JobApplicationForm";
import fetchJob from "@/lib/fetchJob";
import {cookies} from 'next/headers'
import {redirect} from "next/navigation";

/**
 * This is the job application page. This should only be accessed on hard navigation.
 * @param params
 * @param params.id - The id of the job post, url parameter.
 * @constructor
 */
export default async function JobApplicationPage({params}) {
    // Get JWT token for authentication with endpoint
    const token : string | undefined = cookies().get('token')?.value;
    // If user does not have token, redirect to login.
    if (typeof (token) === "undefined") {
        redirect("/login");
    }
    const retrievedJobBox = await fetchJob(token, params.id);
    return (
        <JobApplicationForm retrievedJobBox={retrievedJobBox}/>
    );
}
