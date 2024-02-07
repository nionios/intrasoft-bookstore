"use client";
import axios from "axios";
import {useState, useEffect} from "react";
import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";

export default function ApplyButton(props: { buttonText: string }) {

    const [errorText, setError] = useState('');

    const submitFunction = () => {
        const config = {
            url: '/api/apply',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: new FormData(document.getElementById('applyForm'))
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
                        setError("This job post is not valid at this time.");
                        break;
                    case 404:
                    case 422:
                    default:
                        setError("Server Error, please try again later.");
                        break;
                }
            });
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
