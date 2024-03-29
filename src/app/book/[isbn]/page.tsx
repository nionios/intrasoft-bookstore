import BookBuyApplicationForm from "@/components/BookBuyApplicationForm/BookBuyApplicationForm";
import fetchBook from "@/lib/fetchBook";
import {cookies} from 'next/headers'
import {redirect} from "next/navigation";
import Link from "next/link";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {BookBoxDetailedType} from "@/types";

/**
 * This is the book application page. The isbn of the book is fed through the url on navigation (dynamic route)
 * @param params
 * @constructor
 */
export default async function BookBuyApplicationPage({params} : any) {
    // Get token for authentication with endpoint
    const token: string | undefined = cookies().get('token')?.value;
    // If user does not have token, redirect to login.
    if (typeof (token) === "undefined") {
        redirect("/login");
    }
    const retrievedBookBox : BookBoxDetailedType | null  = await fetchBook(token, params.isbn);
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
            {retrievedBookBox === null ? null : <BookBuyApplicationForm retrievedBookBox={retrievedBookBox}/>}
        </>
    );
}
