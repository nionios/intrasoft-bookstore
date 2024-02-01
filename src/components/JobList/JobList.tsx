import JobBox from "@/components/JobBox/JobBox";
import Spinner from "@/components/Spinner/Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useState, useEffect} from "react";
import {createServerOnlyClientOnlyAliases} from "next/dist/build/create-compiler-aliases";

/**
 * Retrieve job posts from server to display them in UI
 * @returns  An array with retrieved jobs in JobBox component form.
 */
function fetchJobs ()  {
    let addedJobBoxes = []
    for (let i=0; i<50; i++) {
        addedJobBoxes.push(JobBox(i));
    }
    return addedJobBoxes;
};

/**
 * Component for the listing of jobs retrieved from server.
 * @returns An infinite list of jobboxes that are fetched through fetchJobs()
 * @constructor
 */
export default function JobList () {
    const [jobBoxes, setJobPosts_] = useState(fetchJobs());

    /**
     * Wrapper around setJobPosts_ that calls fetchJobs and pushes results to already fetched jobs.
     */
    const updateJobPosts = () => {
        console.log(jobBoxes)
        setJobPosts_(jobBoxes => [...jobBoxes, fetchJobs()] );
    }

    return (
        <InfiniteScroll
            dataLength={jobBoxes.length} //This is important field to render the next data
            next={updateJobPosts}
            hasMore={true}
            loader={<Spinner/>}
            endMessage={
                <p style={{textAlign: 'center'}}>
                    <b>You have seen it all!</b>
                </p>
            }>
                {jobBoxes}
        </InfiniteScroll>
    );
}
//        <ul role="list"
//             className="divide-y divide-gray-100">
//             {JobBoxes}
//         </ul>
