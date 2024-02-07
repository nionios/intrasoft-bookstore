import axios from "axios";
/**
 * Asynchronous function in order to pre-fetch jobs when first rendering the Home page
 * @returns {Array<JobBox>} An array of JobBox components.
 * @param token {string} The token string
 * @throws Error when user is not authorized or there is a server error
 */
const preFetchAllJobs = async (token: string): Promise<Array<any>> => {
    const config = {
        url: `${process.env.endpointURL}/api/job-posts`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        params: {
            page: 1,
            sizePerPage: 10,
        },
    }
    let endpointResponse;
    try {
        endpointResponse = await axios(config);
        return endpointResponse.data.items;
    } catch (error) {
        // If endpoint returns status 401 (Unauthorized), then token is invalid or expired, redirect to login page
        // to re-quthenticate.
        if (error.status === 401) {
            const thrownError = new Error("Unauthorized")
            thrownError.code = 401;
            throw thrownError;
            // If endpoint does not return 401 but another error, log error and return to login page with a message.
        } else {
            const thrownError = new Error("Server Error")
            if (typeof (error.status) !== "number") {
                thrownError.code = 500;
            } else {
                thrownError.code = error.status;
            }
            throw thrownError;
        }
    }
};

export default preFetchAllJobs;
