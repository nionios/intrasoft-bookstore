"use client";
import axios from "axios";
import {useState, useEffect} from "react";
import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";

export default function SubmitButton(props: { buttonText: string }) {

    const [errorText, setError] = useState('');

    const submitFunction = () => {
        const config = {
            url: '/api/auth',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: new FormData(document.getElementById('loginForm'))
        }
        axios(config)
            .then((response) => {
                if (response.data.authFail) {
                    setError("Wrong Password and/or Email.");
                } else if (response.status === 200) {
                    document.location.href = '/home';
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
                    className="btn-animate btn-submit btn-red flex w-full justify-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm">
                {props.buttonText}
            </button>
        </>
    );
}
