"use client";
import Spinner from "@/components/Spinner/Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import {ReactNode, useState} from "react";
import BookBoxSkeleton from "@/components/BookBox/BookBoxSkeleton";
import fetchAllBooks from "@/lib/fetchAllBooks";
import {useCookies} from "next-client-cookies";
import isIterable from "@/lib/isIterable";
import {BookBoxType} from "@/types";
import {redirect} from "next/navigation";
import populateBookBoxes from "@/lib/populateBookBoxes";

/**
 * Component for the listing of books retrieved from server.
 * @returns An infinite list of bookboxes that are fetched through fetchAllBooks()
 * @constructor
 * @param props
 * @param props.initialBooks {Array<BookBox>} An array with the initial books on page fetched from api.
 */
export default function BookList(props: { bookBoxes: Array<BookBoxType>, onBookBoxUpdate : Function }) {
    // hasMore is needed to stop querying the server for book entries once all the available books are displayed.
    const [hasMore, setHasMore] = useState(true);
    /**
     * We start with page 2, since the first page is already pre-fetched when we access homepage. @see preFetchAllBooks()
     */
    const [bookPage, setBookPage] = useState(2);

    const token : string | undefined = useCookies().get("token");
    // Redirect to login if token does not exist.
    if (token === undefined) redirect('/login');
    /**
     * Wrapper around setBookPosts_ that calls fetchAllBooks and pushes results to already fetched books.
     */
    const updateBookPosts = async () => {
        // If fetched books are null, update state as to not try to fetch anymore books and don't update bookBoxes.
        const fetchedBookPosts : BookBoxType[] = populateBookBoxes(await fetchAllBooks(token, bookPage, ''));
        if (!fetchedBookPosts) {
            setHasMore(false);
        } else {
            const prevBookBoxes : BookBoxType[] = props.bookBoxes;
            // Check whether previous book boxes exist. If they do, then add the new ones after them.
            // Else, just set BookBoxes parent state with the new projects only.
            if (isIterable(prevBookBoxes)) {
                props.onBookBoxUpdate([...prevBookBoxes, fetchedBookPosts]);
            } else {
                props.onBookBoxUpdate(fetchedBookPosts);
            }
            // Increment the book page by 1 every time books are fetched.
            setBookPage(bookPage + 1);
        }
    }

    /*
     * Same functionality as updateBookPosts but resets the page number first.
     */
    const resetAndUpdateBookPosts = async () => {
        setBookPage(1);
        await updateBookPosts();
    }

    return (
        <InfiniteScroll
            dataLength={props.bookBoxes.length} //This is important field to render the next data
            next={updateBookPosts}
            pullDownToRefresh={true}
            pullDownToRefreshThreshold={50}
            releaseToRefreshContent={
                <h3 className="text-center">&#8593; Release to refresh</h3>
            }
            refreshFunction={resetAndUpdateBookPosts}
            hasMore={hasMore}
            className="max-w-3xl mt-0 sm:mt-60 z-10"
            loader={
                <>
                    <BookBoxSkeleton/>
                    <Spinner/>
                </>
            }
            endMessage={
                    <p className="text-center end-message mb-10">
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <b>You are all caught up!</b>
                    </p>
            }>
            <ul role="list">
                {props.bookBoxes as ReactNode}
            </ul>
        </InfiniteScroll>
    );
}
