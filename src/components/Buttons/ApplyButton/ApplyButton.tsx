"use client";
import axios from "axios";
import {useState, useEffect} from "react";
import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";

/**
 * A button that makes an POST request to API, which then POSTs the application to the endpoint.
 * @param props
 * @constructor
 */
export default function ApplyButton(props: { buttonText: string }) {

    const [errorText, setError] = useState('');

    const submitFunction = () => {
        // If user has not filled the required field yearsOfExperience, do not try to submit form.
        if ( (document.getElementById('yearsOfExperience') as HTMLInputElement)?.value === '') {
            setError("Please fill all required fields.");
            return false;
        }
        const applyFormElement = document.getElementById('applyForm');
        if (applyFormElement === null) {
            setError("Server Error, please try again later");
            return false;
        } else {
            const config = {
                url: '/api/apply',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: new FormData(applyFormElement as HTMLFormElement)
            }
            axios(config)
                .then((response) => {
                    // If all is well go to success page.
                    document.location.href = '/success';
                })
                .catch((error) => {
                    switch (error.response.status) {
                        case 401:
                            // If user is not authenticated send them back to /login.
                            document.location.href = '/login';
                            break;
                        case 409:
                            // Job Post has expired.
                            setError("This job post is not valid at this time.");
                            break;
                        case 422:
                            // User has applied without all the required fields.
                            setError("Please fill all required fields.");
                            break;
                        // Most likely a problem with the endpoint or the server.
                        case 404:
                        default:
                            setError("Server Error, please try again later.");
                            break;
                    }
                });
        }
    };

    return (
        <>
            {errorText === '' ? null : <ErrorAlert errorText={errorText}/>}
            <button type="button"
                    onClick={submitFunction}
                    className="btn-animate btn-submit btn-red flex w-full justify-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm">
                {props.buttonText}
            </button>
        </>
    );
}
