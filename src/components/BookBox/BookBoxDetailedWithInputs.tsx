import Image from "next/image";
import bookImage from "@/../public/books/book.jpeg"
import BookCreateApplicationInput from "@/components/BookCreateApplicationForm/BookCreateApplicationInput";
import DetailBoxTextarea from "@/components/DetailBox/DetailBoxTextarea";
import DetailBoxInput from "@/components/DetailBox/DetailBoxInput";
import BookBoxHeadingInput from "@/components/BookBox/BookBoxComponents/BookBoxHeadingInput";

/**
 * A BookBox that has the book description, shows up on the book creation page and carries inputs for user.
 * @param props
 * @constructor
 */
export default function BookBoxDetailedWithInputs() {
    return (
        <div id={`bookPostCreation`}
             className={`grid grid-rows-auto grid-cols-3 md:grid-cols-5 animate-fade book-entry rounded-lg m-5 drop-shadow-lg gap-x-2 md:gap-x-6 p-5 gap-y-4`}>
            <div className="row-span-1 col-span-5 md:col-span-2 col-span-1 flex gap-x-1 mr-1">
                <Image className="rounded-md shadow-lg shrink-0 bg-gray-50"
                       width={200}
                       height={150}
                       src={bookImage}
                       alt="An image of a company building."/>
            </div>
            <div className="row-span-1 col-span-5 md:col-span-3 min-w-0 gap-x-4">
                <BookBoxHeadingInput/>
                <div className="py-1">
                    ISBN-10*: <input name="isbn"
                                     id="isbnInput"
                                     required
                                     className="block w-2/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                     type="text"
                                     pattern="\d{10,10}"/>
                </div>
                <div className="py-1">
                    Website*: <input name="website"
                                     id="websiteInput"
                                     required
                                     className="block w-full md:w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                     type="text"/>
                </div>
            </div>
            <div className="grid row-span-1 col-span-4 md:col-span-5 grid-cols-3 md:grid-cols-4 grid-rows-1 gap-4 content-end">
                <DetailBoxInput title="Author"
                                type="text"
                                subtitle="Full Name of author."
                                colspan={2}/>
                <DetailBoxInput title="Publisher"
                                type="text"
                                subtitle="Full Name of publisher. (Max: 60 characters, Min: 5)"
                                pattern="[a-zA-Z' ]{5,60}"
                                colspan={2}/>
                <DetailBoxInput title="Published"
                                subtitle="Date of publishing."
                                type="text"
                                pattern="\d{4}"/>
                <DetailBoxInput title="Pages"
                                subtitle="No. of pages. (Max: 9999)"
                                type="number"
                                max={9999}/>
            </div>
            <div className="row-span-1 col-span-5 min-w-0 gap-x-4">
                <DetailBoxTextarea title="Description"
                                   colspan={5}
                                   maxLength={512}
                                   subtitle="A short description of the books contents."/>
            </div>
            <div className="row-span-1 col-span-full min-w-0 gap-x-4">
                <BookCreateApplicationInput/>
            </div>
        </div>
    );
}
