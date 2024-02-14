import Feed from "@/components/Feed/Feed";
import {cookies} from 'next/headers'
import {redirect} from "next/navigation";
import populateBookBoxes from "@/lib/populateBookBoxes";
import {Book} from "@/types";
import preFetchAllBooks from "@/lib/preFetchAllBooks";


/**
 * The homepage where our feed of books (Feed Component) lives.
 * @constructor
 * @returns {Feed | undefined} Either returns the Feed with the books for homepage or redirects to login
 *                             on authentication or server error during initial book entry fetch.
 */
//TODO: error texts on redirection on /login
export default async function Home() {
    const token: string | undefined = cookies().get('token')?.value;
    // If user does not have token, redirect to login.
    if (typeof (token) === "undefined") {
        redirect("/login");
    }
    let initialBookList : Book[];
    try {
        // These are the books the user first sees upon navigation to the homepage.
        // We need preFetch here since this is SSR
        initialBookList = await preFetchAllBooks(token);
    } catch (error : any) {
        // If errors exist, go back to login page.
        redirect("/login");
    }
    return (
        <main className="flex min-h-max flex-col items-center justify-between pt-16">
            <Feed initialBooks={populateBookBoxes(initialBookList)}/>
        </main>
    );
}
