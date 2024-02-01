import Spinner from "@/components/Spinner/Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {useState} from "react";
import retrieveJWT from "@/lib/retrieveJWT";

/**
 * Retrieve job posts from server to display them in UI
 * @returns {JobBox[]} Retrieved jobs in JobBox component array form.
 */
const fetchJobs = async () => {
    const config = {
        url: `${process.env.endpointURL}/api/job-posts`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${retrieveJWT()}`
        },
        data: {
            page: 1,
            sizePerPage: 10,
        },
    }


    // TODO: See if auth is happening with endpoint, parse results, convert to JobBox (modify) then display.
    try {
        const endpointResponse = await axios(config);
    } catch (error) {
        console.error(error)
    }

    return
};

/**
 * Component for the listing of jobs retrieved from server.
 * @returns An infinite list of jobboxes that are fetched through fetchJobs()
 * @constructor
 */
export default function JobList() {
    const [jobBoxes, setJobPosts_] = useState(fetchJobs());

    /**
     * Wrapper around setJobPosts_ that calls fetchJobs and pushes results to already fetched jobs.
     */
    const updateJobPosts = () => {
        console.log(jobBoxes)
        setJobPosts_(jobBoxes => [...jobBoxes, fetchJobs()]);
    }

    return (
        <ul role="list"
            className="divide-y divide-gray-100">
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
        </ul>
    );
}

