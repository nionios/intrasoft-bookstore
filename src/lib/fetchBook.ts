import axios from 'axios';
import type {BookBoxDetailedType} from "@/types";
import BookBoxDetailed from "@/components/BookBox/BookBoxDetailed";
/**
 * Retrieve specific book entry from server to display it in UI
 * @param token {string} The bearer token for authentication
 * @param id {number} The id of the book
 * @returns {BookBoxDetailed | null} Retrieved book in BookBoxDetailed component.
 */
const fetchBook = async (token: string, id: number): Promise<BookBoxDetailedType | null> => {
    const config = {
        url: `${process.env.endpointURL}/api/book-entries/${id}`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
    }
    // Make axios request to api and get the book entries.
    try {
        let apiResponse = await axios(config);
        if (apiResponse.status === 200) {
            // If apiResponse is empty array, then return [] and don't try to populate bookBoxes.
            if (apiResponse.data.length !== 0) {
                return BookBoxDetailed(apiResponse.data);
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

export default fetchBook;
