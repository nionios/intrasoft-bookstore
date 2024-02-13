import {Noto_Serif_Display} from "next/font/google";
import Stars from "@/components/Stars/Stars";

const notoSerifDisplay = Noto_Serif_Display({subsets: ["latin"]});

/**
 * A heading for the BookBoxes displaying the company name and the title of the position offered.
 * @param props
 * @param props.authorName {string} The name of the author of the book
 * @param props.title {string} The title of the book
 * @param props.rating {number} The book rating out of 5.
 * @constructor
 */
export default function BookBoxHeading(props: { authorName: string, title: string, rating: number, readonly: boolean}) {
    return (
        <>
            <div className="min-w-0 flex-auto">
                <p className="mt-1 truncate text-md leading-5 text-gray-500">
                    {props.authorName}
                </p>
                <p className={`text-2xl font-semibold leading-6 text-gray-900 py-1 ${notoSerifDisplay.className}`}>
                    {props.title}
                </p>
                <Stars rating={props.rating}
                       readonly={props.readonly}/>
            </div>
        </>
    );
}
