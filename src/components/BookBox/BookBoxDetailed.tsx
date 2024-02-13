import Image from "next/image";
import bookImage from "@/../public/books/book.jpeg"
import BookBoxHeading from "@/components/BookBox/BookBoxComponents/BookBoxHeading";
import DetailBoxBar from "@/components/BookBox/BookBoxComponents/DetailBoxBar";
import BookApplicationInput from "@/components/BookApplicationForm/BookApplicationInput";
import {Book} from "@/types";

/**
 * A BookBox that has the book description, shows up on the individual book page and not on homepage.
 * @param props
 * @constructor
 */
export default function BookBoxDetailed(props: {inputBook : Book}) {
    // Construct pretty dates from info shared from api.
    const createdAtHumanDate = new Date(props.inputBook.published).toDateString().substring(4, 10);

    return (
        <div id={`bookPost${props.inputBook.isbn}Details`}
             className={`grid grid-rows-auto grid-cols-3 md:grid-cols-5 animate-fade book-entry rounded-lg m-5 drop-shadow-lg gap-x-2 md:gap-x-6 p-5 gap-y-4`}>
            <div className="row-span-1 col-span-1 flex min-w-0 gap-x-1 mr-1">
                <Image className="rounded-md shrink-0 bg-gray-50"
                       width={150}
                       height={150}
                       src={bookImage}
                       alt="An image of a company building."/>
            </div>
            <div className="row-span-1 col-span-2 md:col-span-4 min-w-0 gap-x-4">
                <BookBoxHeading authorName={props.inputBook.author}
                                rating={3}
                                readonly={true}
                                title={props.inputBook.title}/>
            </div>
            <div className="grid row-span-1 col-span-3 md:col-span-4 grid-cols-3 md:grid-cols-4 grid-rows-1 gap-4 content-end">
                <DetailBoxBar createdAtHumanDate={createdAtHumanDate}
                              publisher={props.inputBook.publisher}/>
            </div>
            <div className="row-span-1 col-span-3 md:col-span-4 min-w-0 gap-x-4">
                <div className="text-md font-semibold leading-6 text-gray-900 py-1">
                    {props.inputBook.description}
                </div>
            </div>
            <div className="row-span-1 col-span-full min-w-0 gap-x-4">
                <BookApplicationInput/>
            </div>
        </div>
    );
}
