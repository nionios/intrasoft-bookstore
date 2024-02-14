/**
 * A small box that has a title/description, with inputs for user book entry. Mimics book details page regular DetailBox
 * @param props
 * @param props.title {string} The title for the box.
 * @param props.type {string} The type of the input allowed in the <input> element.
 * @param props.colspan {number} Default: 1, col-span if defined.
 * @constructor
 */
export default function DetailBoxInput(props: { title: string, type: string, colspan?: number}) {
    return (
        <div className={`grid content-between netcompany-accent rounded-lg p-2 col-span-${props.colspan ? props.colspan.toString() : "1"} netcompany-accent-border border`}>
            <h2 className="text-sm leading-6 self-start">
                {props.title}
            </h2>
            <input name={props.title.toLowerCase()}
                   type={props.type}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </input>
        </div>
    );
}
