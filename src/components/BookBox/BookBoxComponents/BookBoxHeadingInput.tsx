import {Noto_Serif_Display} from "next/font/google";
import Stars from "@/components/Stars/Stars";

const notoSerifDisplay = Noto_Serif_Display({subsets: ["latin"]});

/**
 * A heading for the BookBoxes displaying the book author name, book title and the book rating.
 * This is the input mimicking BookBoxHeading when user inputs a new book on book creation page.
 * It also has a subtitle for the homepage after the book creation, which is not present in BookBoxDetailed.
 * Author is not present because the input is in the Details later on.
 * @constructor
 */
export default function BookBoxHeadingInput() {
    return (
        <>
            <div className="min-w-0 flex-auto">
                Title*:
                <div className={`text-2xl font-semibold leading-6 text-gray-900 py-1 ${notoSerifDisplay.className}`}>
                    <input name="title"
                           id="titleInput"
                           required
                           className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           type="text"
                           pattern="[a-zA-Z' ]{10,120}"/>
                </div>
                <div className="text-sm mb-3"> Max Characters: 120, Min Characters: 10</div>
                Subtitle:
                <div className="mt-1 truncate text-md leading-5 text-gray-500">
                    <input name="subtitle"
                           id="subtitleInput"
                           className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           type="text"
                           pattern="[a-zA-Z' ]{0,200}"/>
                </div>
                <div className="text-sm mb-3"> Max Characters: 200</div>

                Rating*:
                <Stars rating={0}
                       readonly={false}/>
            </div>
        </>
    );
}
