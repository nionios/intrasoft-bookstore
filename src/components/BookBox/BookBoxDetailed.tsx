import Image from "next/image";
import bookImage from "@/../public/books/book.jpeg"
import BookBoxHeading from "@/components/BookBox/BookBoxComponents/BookBoxHeading";
import BookBuyApplicationInput from "@/components/BookBuyApplicationForm/BookBuyApplicationInput";
import {Book} from "@/types";
import DetailBox from "@/components/DetailBox/DetailBox";
import Link from "next/link";

/**
 * A BookBox that has the book description, shows up on the individual book page and not on homepage.
 * @param props
 * @constructor
 */
export default function BookBoxDetailed(props: { inputBook: Book }) {
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
                                rating={props.inputBook.rating}
                                readonly={true}
                                title={props.inputBook.title}/>
                <div className="py-1">
                    <span className="font-bold">
                    ISBN :&nbsp;
                    </span>
                    {props.inputBook.isbn}
                </div>
                <div className="py-1">
                    <Link className="btn-animate btn-red px-10 py-1 rounded-full"
                          href={props.inputBook.website}>Website</Link>
                </div>
            </div>
            <div className="grid row-span-1 col-span-4 md:col-span-5 grid-cols-3 md:grid-cols-4 grid-rows-1 gap-4 content-end">
                <DetailBox title="Author"
                           colspan={2}
                           subtitle={props.inputBook.author}/>
                <DetailBox title="Publisher"
                           colspan={2}
                           subtitle={props.inputBook.publisher}/>
                <DetailBox title="Published"
                           subtitle={createdAtHumanDate}/>
                <DetailBox title="Pages"
                           subtitle={props.inputBook.pages.toString()}/>
            </div>
            <div className="row-span-1 col-span-5 min-w-0 gap-x-4">
                <DetailBox title="Description"
                           colspan={5}
                           subtitle={props.inputBook.description}/>
            </div>
            <div className="row-span-1 col-span-full min-w-0 gap-x-4">
                <input value={props.inputBook.isbn}
                       name='isbn'
                       hidden/>
                <BookBuyApplicationInput price={props.inputBook.price}/>
            </div>
        </div>
    );
}
