"use client";
import axios from "axios";
import {useState, useEffect} from "react";
import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";

export default function SubmitButton(props: { buttonText: string, reqBody: any }) {

    const [errorText, setError] = useState('');

    const submitFunction = () => {
        const config = {
            url: '/api/auth',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email: "Fred@gmail.com",
                password: "Flintstone"
            },
        }
        axios(config)
            .then((response) => {
                if (!!response.data.authFail) {
                    setError("Wrong Password and/or Email.");
                } else {
                    setError("Server Error, please try again later.");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            {errorText === '' ? null : <ErrorAlert errorText={errorText}/>}
            <button type="button"
                    onClick={submitFunction}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {props.buttonText}
            </button>
        </>
    );
}
