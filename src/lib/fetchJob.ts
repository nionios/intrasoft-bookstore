import axios from 'axios';
import type {JobBoxDetailedType} from "@/types";
import JobBoxDetailed from "@/components/JobBox/JobBoxDetailed";
/**
 * Retrieve specific job post from server to display it in UI
 * @param token {string} The bearer token for authentication
 * @param id {number} The id of the job
 * @returns {JobBoxDetailed | null} Retrieved job in JobBoxDetailed component.
 */
const fetchJob = async (token: string, id: number): Promise<JobBoxDetailedType | null> => {
    const config = {
        url: `${process.env.endpointURL}/api/job-posts/${id}`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
    }
    // Make axios request to api and get the job posts.
    try {
        let apiResponse = await axios(config);
        if (apiResponse.status === 200) {
            // If apiResponse is empty array, then return [] and don't try to populate jobBoxes.
            if (apiResponse.data.length !== 0) {
                return JobBoxDetailed(apiResponse.data);
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

export default fetchJob;
