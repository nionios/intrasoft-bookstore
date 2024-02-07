import JobApplicationForm from "@/components/JobApplicationForm/JobApplicationForm";
import fetchJob from "@/lib/fetchJob";
import {cookies} from 'next/headers'
import {redirect} from "next/navigation";
import Link from "next/link";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/**
 * This is the job application page. This should only be accessed on hard navigation.
 * @param params
 * @param params.id - The id of the job post, url parameter.
 * @constructor
 */
export default async function JobApplicationPage({params}) {
    // Get JWT token for authentication with endpoint
    const token: string | undefined = cookies().get('token')?.value;
    // If user does not have token, redirect to login.
    if (typeof (token) === "undefined") {
        redirect("/login");
    }
    const retrievedJobBox = await fetchJob(token, params.id);
    return (
        <>
            <Link href="/home"
                  className="grid grid-cols-2 w-32 justify-start px-6 pt-20 lg:px-8">
                <FontAwesomeIcon className="h-6 w-6 col-span-1 btn-animate "
                                 icon={faChevronLeft}/>
                <span className="col-span-1 text-start">
                    Back
                </span>
            </Link>
            <JobApplicationForm retrievedJobBox={retrievedJobBox}/>
        </>
    );
}
