import SubmitButton from "@/components/Buttons/SubmitButton/SubmitButton";

/**
 * Book create button and price
 * @constructor
 */
export default function BookCreateApplicationInput() {
    return (
        <>
            <div className="mt-3">
                Price *: <input name="price"
                                className="block w-40 rounded-md border-0 py-1.5 mb-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                type="number"/>
                <span className="text-sm">*Required inputs</span>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
                <SubmitButton buttonText="Create Book"/>
            </div>
        </>
    );
}
