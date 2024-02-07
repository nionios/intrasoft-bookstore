"use client";
import Spinner from "@/components/Spinner/Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useState} from "react";
import JobBox from "@/components/JobBox/JobBox";
import JobBoxSkeleton from "@/components/JobBox/JobBoxSkeleton";
import fetchJobs from "@/lib/fetchJobs";
import {useCookies} from "next-client-cookies";
/**
 * Component for the listing of jobs retrieved from server.
 * @returns An infinite list of jobboxes that are fetched through fetchJobs()
 * @constructor
 * @param props
 * @param props.initialJobs {Array<JobBox>} An array with the initial jobs on page fetched from api.
 */
export default function JobList(props: { jobBoxes: Array<typeof JobBox>, onJobBoxUpdate : Function }) {
    // hasMore is needed to stop querying the server for job posts once all the available jobs are displayed.
    const [hasMore, setHasMore] = useState(true);
    /**
     * We start with page 2, since the first page is already pre-fetched when we access homepage. @see preFetchJobs()
     */
    const [jobPage, setJobPage] = useState(2);

    const cookies = useCookies();
    /**
     * Wrapper around setJobPosts_ that calls fetchJobs and pushes results to already fetched jobs.
     */
    const updateJobPosts = async () => {
        // If fetched jobs are null, update state as to not try to fetch anymore jobs and don't update jobBoxes.
        const fetchedJobPosts = await fetchJobs(cookies, jobPage, '');
        if (!fetchedJobPosts) {
            setHasMore(false);
        } else {
            const prevJobBoxes = props.jobBoxes;
            // Check whether previous job boxes exist. If they do, then add the new ones after them.
            // Else, just set JobBoxes parent state with the new projects only.
            if (Symbol.iterator in Object(prevJobBoxes)) {
                props.onJobBoxUpdate(prevJobBoxes => [...prevJobBoxes, fetchedJobPosts]);
            } else {
                props.onJobBoxUpdate(fetchedJobPosts);
            }
            // Increment the job page by 1 every time jobs are fetched.
            setJobPage(jobPage + 1);
        }
    }

    /*
     * Same functionality as updateJobPosts but resets the page number first.
     */
    const resetAndUpdateJobPosts = async () => {
        setJobPage(1);
        await updateJobPosts();
    }

    return (
        <InfiniteScroll
            dataLength={props.jobBoxes.length} //This is important field to render the next data
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
                {props.jobBoxes}
            </ul>
        </InfiniteScroll>
    );
}
