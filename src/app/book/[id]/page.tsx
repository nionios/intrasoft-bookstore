import BookApplicationForm from "@/components/BookApplicationForm/BookApplicationForm";
import fetchBook from "@/lib/fetchBook";
import {cookies} from 'next/headers'
import {redirect} from "next/navigation";
import Link from "next/link";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {BookBoxDetailedType} from "@/types";

/**
 * This is the book application page. This should only be accessed on hard navigation.
 * @param params
 * @param params.id - The id of the book entry, url parameter.
 * @constructor
 */
export default async function BookApplicationPage({params} : any) {
    // Get token for authentication with endpoint
    const token: string | undefined = cookies().get('token')?.value;
    // If user does not have token, redirect to login.
    if (typeof (token) === "undefined") {
        redirect("/login");
    }
    const retrievedBookBox : BookBoxDetailedType | null  = await fetchBook(token, params.id);
    return (
        <>
            <Link href="/home"
                  className="grid grid-cols-2 w-32 justify-start px-6 pt-20 lg:px-8">
                <FontAwesomeIcon className="h-6 w-6 col-span-1 btn-animate "
                                 icon={faChevronLeft}/>
                <span className="col-span-1 text-start">
                    Back
                </span>
            </Link>
            {retrievedBookBox === null ? null : <BookApplicationForm retrievedBookBox={retrievedBookBox}/>}
        </>
    );
}
