import axios from 'axios';
import populateBookBoxes from "@/lib/populateBookBoxes";
/**
 * Retrieve book entries from server to display them in UI
 * @param token {string} The token provided by next-client-cookies
 * @param page {number} The page number the user is currently scrolled to.
 * @param query {string} The query passed on to the endpoint in order to make searches.
 * @param resultSize {number} Number of results maximum - Default is 5.
 * @returns {Book[] | null} Retrieved books
 */
const fetchAllBooks = async (token: string, page: number, query: string, resultSize: number = 5) => {
    const config = {
        url: `/api/books/all`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        data: {
            page: page,
            sizePerPage: resultSize,
            q : query,
        },
    }
    // Make axios request to api and get the book entries.
    try {
        let apiResponse = await axios(config);
        if (apiResponse.status === 200) {
            // If apiResponse is empty array, then return [] and don't try to populate bookBoxes.
            if (apiResponse.data.items.length !== 0) {
                return apiResponse.data.items;
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
        // If axios req fails, rethrow error.
        throw error;
    }
};

export default fetchAllBooks;
