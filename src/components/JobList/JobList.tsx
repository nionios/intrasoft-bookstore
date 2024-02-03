import Spinner from "@/components/Spinner/Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {useState} from "react";
import {Cookies, useCookies} from "next-client-cookies";
import JobBox from "@/components/JobBox/JobBox";

/**
 * Creates an array of JobBoxes and fills them with job info from input array.
 * @param jobs {Array}
 */
const populateJobBoxes = (jobs: Array) => {
    const jobBoxes: Array<typeof JobBox> = [];
    console.log(jobs)
    jobs.forEach(job => {
        jobBoxes.push(JobBox(job));
    });
    return jobBoxes;
}


/**
 * Retrieve job posts from server to display them in UI
 * @param cookies {Cookies} The cookies provided by next-client-cookies
 * @param page {number} The page number the user is currently scrolled to.
 * @returns {JobBox[] | []} Retrieved jobs in JobBox component array form from populateJobBoxes().
 */
const fetchJobs = (cookies: Cookies, page: number) => {
    const config = {
        url: `/api/jobs/all`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies.get('token')}`
        },
        data: {
            page: page,
            sizePerPage: 10,
        },
    }
    // Make axios request to api and get the job posts.
    return axios(config)
        .then((apiResponse) => {
            if (apiResponse.status === 200) {
                // If apiResponse is empty array, then return null and don't try to populate jobBoxes.
                if (apiResponse.data.items.length !== 0) {
                    return populateJobBoxes(apiResponse.data.items);
                } else {
                    return null;
                }
            } else {
                // If response status is 400, then pop up login modal, means auth was not successful.
                // This either means auth token has expired or not valid.
                document.location.href = "/login";
                return [];
            }
        })
        .catch((error) => {
            console.error(error);
            return new Array(JobBox(0));
        });
};

/**
 * Component for the listing of jobs retrieved from server.
 * @returns An infinite list of jobboxes that are fetched through fetchJobs()
 * @constructor
 * @param props
 * @param props.initialJobs {Array<JobBox>} An array with the initial jobs on page fetched from api.
 */
export default function JobList(props: { initialJobs: Array<JobBox> }) {
    const cookies = useCookies();
    const [jobBoxes, setJobPosts_] = useState(props.initialJobs);
    const [jobPage, setJobPage] = useState(1);

    /**
     * Wrapper around setJobPosts_ that calls fetchJobs and pushes results to already fetched jobs.
     */
    const updateJobPosts = () => {
        setJobPosts_(jobBoxes => [...jobBoxes, fetchJobs(cookies, jobPage)]);
        // Increment the job page by 1 every time jobs are fetched.
        setJobPage(jobPage+1);
    }

    return (
        <InfiniteScroll
            dataLength={jobBoxes.length} //This is important field to render the next data
            next={updateJobPosts}
            hasMore={true}
            loader={<Spinner/>}
            endMessage={
                <p style={{textAlign: 'center'}}>
                    <b>You&apos;ve seen it all!</b>
                </p>
            }>
            <ul role="list">
                {jobBoxes}
            </ul>
        </InfiniteScroll>
    );
}
