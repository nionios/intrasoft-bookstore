import {Noto_Serif_Display} from "next/font/google";
import Stars from "@/components/Stars/Stars";

const notoSerifDisplay = Noto_Serif_Display({subsets: ["latin"]});

/**
 * A heading for the BookBoxes displaying the book author name, book title and the book rating.
 * This is the input mimicking BookBoxHeading when user inputs a new book on book creation page.
 * @param props
 * @param props.authorName {string} The name of the author of the book
 * @param props.title {string} The title of the book
 * @param props.rating {number} The book rating out of 5.
 * @constructor
 */
export default function BookBoxHeadingInput() {
    return (
        <>
            <div className="min-w-0 flex-auto">
                Author:
                <div className="mt-1 truncate text-md leading-5 text-gray-500">
                    <input name="author"
                           className="block w-2/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           type="text"/>
                </div>
                Title:
                <div className={`text-2xl font-semibold leading-6 text-gray-900 py-1 ${notoSerifDisplay.className}`}>
                    <input name="title"
                           className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           type="text"/>
                </div>
                Rating:
                <Stars rating={0}
                       readonly={false}/>
            </div>
        </>
    );
}
