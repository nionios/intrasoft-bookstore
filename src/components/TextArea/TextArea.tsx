 /**
 * @param {Object} props All properties
 * @param {number} props.name Name of text area in form
 * @param {string} props.description Rendered description under text area.
 * @constructor
 */
export default function TextArea(props: {
    name: string,
    description: string
}) {
    return (
        <>
            <div className="col-span-full">
                <label htmlFor={`${props.name}`}
                       className="block text-sm font-medium leading-6 text-gray-900">{`${props.name}`}</label>
                <div className="mt-2">
            <textarea id={`${props.name}`}
                      name={`${props.name}`}
                      rows="3"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">{props.description}</p>
            </div>
        </>
    );
}
