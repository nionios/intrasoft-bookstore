import Link from "next/link";
import Image from "next/image";
import companyImage from "@/../public/books/book.jpeg"
import DetailBoxBar from "@/components/BookBox/BookBoxComponents/DetailBoxBar";
import BookBoxHeading from "@/components/BookBox/BookBoxComponents/BookBoxHeading";
import {Book} from "@/types";

export default function BookBox(props: {inputBook : Book}) {
    // Construct pretty dates from info shared from api.
    const createdAtHumanDate = new Date(props.inputBook.published).toDateString().substring(4, 15);

    return (
        <li id={`bookPost${props.inputBook.isbn}`}
            key={props.inputBook.isbn}
            className={`grid grid-rows-auto grid-cols-3 md:grid-cols-5 animate-fade book-entry rounded-lg m-5 drop-shadow-lg gap-x-2 md:gap-x-6 p-5 gap-y-4`}>
            <div className="row-span-1 md:row-span-2 col-span-1 flex min-w-0 gap-x-1 mr-1">
                <Image className="rounded-md shrink-0 bg-gray-50"
                       width={150}
                       height={150}
                       src={companyImage}
                       alt="An image of a company building."/>
            </div>
            <div className="row-span-1 col-span-2 md:col-span-4 min-w-0 gap-x-4">
                <BookBoxHeading authorName={props.inputBook.author}
                                title={props.inputBook.title}
                                rating={3}
                                readonly={true}/>
            </div>
            <div className="grid row-span-1 col-span-3 md:col-span-4 grid-cols-3 md:grid-cols-4 grid-rows-1 gap-4 content-end">
                <DetailBoxBar createdAtHumanDate={createdAtHumanDate}
                              publisher={props.inputBook.publisher}/>
                <div className="hidden shrink-0 md:flex md:flex-col col-span-1 justify-end">
                    <Link href={`/book/${props.inputBook.isbn}`}
                          className="text-sm btn-animate bg-secondary-brand-color text-white text-center rounded-lg py-2">
                         Read More
                    </Link>
                </div>
            </div>
            <Link href={`/book/${props.inputBook.isbn}`}
                  className="btn-animate shrink-0 grid md:hidden row-span-1 bg-secondary-brand-color rounded-lg col-span-5 mt-3 py-2 justify-center content-center text-white text-center">
                Read More
            </Link>
        </li>
    );
}
