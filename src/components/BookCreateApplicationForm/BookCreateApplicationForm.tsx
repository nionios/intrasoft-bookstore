"use client";

import type {BookBoxDetailedType} from "@/types";
import {FormEvent, ReactNode, useState} from "react";
import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";
import axios from "axios";
import BookBoxDetailedWithInputs from "@/components/BookBox/BookBoxDetailedWithInputs";

/**
 * The application form for the book details/application page.
 * @param props
 * @param props.retrievedBookBox {typeof BookBoxDetailed} A Detailed Book Box component with selected book info.
 * @constructor
 */
export default function BookCreateApplicationForm() {

    const [errorText, setError] = useState('');

    const submitFunction = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const applyFormElement = document.getElementById('createForm');
        if (applyFormElement === null) {
            setError("Server Error, please try again later");
            return false;
        } else {
            const config = {
                url: '/api/books/create',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: new FormData(applyFormElement as HTMLFormElement)
            }
            axios(config)
                .then((response) => {
                    // If all is well go to newly created book page.
                    document.location.href = `/book/${response.data.isbn}`;
                })
                .catch((error) => {
                    switch (error.response.status) {
                        case 400:
                            setError("Some required inputs are missing. Please check your inputs.");
                            break;
                        case 403:
                            // If user is not authenticated send them back to /login.
                            document.location.href = '/login';
                            break;
                        case 409:
                            setError("Book with same isbn is already on database.");
                            break;
                        default:
                            setError("Server Error, please try again later.");
                            break;
                    }
                });
        }
    };

    return (
        <div className="max-w-3xl flex min-h-full flex-col justify-center px-6 py-3 lg:px-8 sm:mx-auto mx-0">
            <form id="createForm"
                  onSubmit={submitFunction}
                  className="space-y-6">
                <BookBoxDetailedWithInputs/>
                {errorText === '' ? null : <ErrorAlert errorText={errorText}/>}
            </form>
        </div>
    );
}
