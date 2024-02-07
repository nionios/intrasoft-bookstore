"use client";
import Spinner from "@/components/Spinner/Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {useState} from "react";
import {Cookies, useCookies} from "next-client-cookies";
import JobBox from "@/components/JobBox/JobBox";
import JobBoxSkeleton from "@/components/JobBox/JobBoxSkeleton";

/**
 * Creates an array of JobBoxes and fills them with job info from input array.
 * @param jobs {Array}
 */
const populateJobBoxes = (jobs: Array) => {
    const jobBoxes: Array<typeof JobBox> = [];
    jobs.forEach(job => {
        jobBoxes.push(JobBox(job));
    });
    return jobBoxes;
}


/**
 * Retrieve job posts from server to display them in UI
 * @param cookies {Cookies} The cookies provided by next-client-cookies
 * @param page {number} The page number the user is currently scrolled to.
 * @returns {JobBox[] | null} Retrieved jobs in JobBox component array form from populateJobBoxes().
 */
const fetchJobs = async (cookies: Cookies, page: number) => {
    const config = {
        url: `/api/jobs/all`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies.get('token')}`
        },
        data: {
            page: page,
            sizePerPage: 5,
        },
    }
    // Make axios request to api and get the job posts.
    try {
        let apiResponse = await axios(config);
        if (apiResponse.status === 200) {
            // If apiResponse is empty array, then return [] and don't try to populate jobBoxes.
            if (apiResponse.data.items.length !== 0) {
                return populateJobBoxes(apiResponse.data.items);
            } else {
                return null;
            }
        } else {
            // If response status is 400, then pop up login modal, means auth was not successful.
            // This either means auth token has expired or not valid.
            document.location.href = "/login";
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

/**
 * Component for the listing of jobs retrieved from server.
 * @returns An infinite list of jobboxes that are fetched through fetchJobs()
 * @constructor
 * @param props
 * @param props.initialJobs {Array<JobBox>} An array with the initial jobs on page fetched from api.
 */
export default function JobList(props: { initialJobs: Array<any> }) {
    const cookies = useCookies();
    const [jobBoxes, setJobPosts_] = useState(populateJobBoxes(props.initialJobs));
    // hasMore is needed to stop querying the server for job posts once all the available jobs are displayed.
    const [hasMore, setHasMore] = useState(true);
    /**
     * We start with page 2, since the first page is already pre-fetched when we access homepage. @see preFetchJobs()
     */
    const [jobPage, setJobPage] = useState(2);

    /**
     * Wrapper around setJobPosts_ that calls fetchJobs and pushes results to already fetched jobs.
     */
    const updateJobPosts = async () => {
        // If fetched jobs are null, update state as to not try to fetch anymore jobs and dont update jobBoxes.
        const fetchedJobPosts = await fetchJobs(cookies, jobPage);
        if (!fetchedJobPosts) {
            setHasMore(false);
        } else {
            setJobPosts_(jobBoxes => [...jobBoxes, fetchedJobPosts]);
            // Increment the job page by 1 every time jobs are fetched.
            setJobPage(jobPage + 1);
        }
    }

    /*
     * Same functionality as updateJobPosts but resets the page number first.
     */
    const resetAndUpdateJobPosts = async () => {
        setJobPage(1);
        updateJobPosts();
    }

    /*
     * Function to reset the variables in order to re-render list.
     * @returns {void}
     */
    const resetVariables = () : void => {
        setHasMore(true);
        setJobPage(1);
    }

    return (
        <InfiniteScroll
            dataLength={jobBoxes.length} //This is important field to render the next data
            next={updateJobPosts}
            pullDownToRefresh={true}
            pullDownToRefreshThreshold={50}
            releaseToRefreshContent={
                <h3 className="text-center">&#8593; Release to refresh</h3>
            }
            refreshFunction={resetAndUpdateJobPosts}
            hasMore={hasMore}
            className="max-w-3xl"
            loader={
                <>
                    <JobBoxSkeleton/>
                    <Spinner/>
                </>
            }
            endMessage={
                    <p className="text-center end-message mb-10">
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <b>You are all caught up!</b>
                    </p>
            }>
            <ul role="list">
                {jobBoxes}
            </ul>
        </InfiniteScroll>
    );
}
