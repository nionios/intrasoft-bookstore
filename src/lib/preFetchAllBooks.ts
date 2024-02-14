import axios from "axios";

/**
 * Asynchronous function in order to pre-fetch books when first rendering the Home page
 * @returns {Array<BookBox>} An array of BookBox components.
 * @param token {string} The token string
 * @throws Error when user is not authorized or there is a server error
 */
const preFetchAllBooks = async (token: string): Promise<Array<any>> => {
        const config = {
            url: `http://localhost:3000/api/books/all`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            data: {
                page: 1,
                sizePerPage: 10,
            },
        }
        let endpointResponse;
        try {
            endpointResponse = await axios(config);
            return endpointResponse.data.items;
        } catch (error: any) {
            // If endpoint returns status 401 (Unauthorized), then token is invalid or expired, redirect to login page
            // to re-authenticate.
            let thrownError: Error;
            if (typeof (error.status) !== "number") {
                thrownError = new Error(`Server Error 500`)
            } else {
                thrownError = new Error(`Server Error ${error.status}`)
            }
            throw thrownError;
        }
    };

export default preFetchAllBooks;
