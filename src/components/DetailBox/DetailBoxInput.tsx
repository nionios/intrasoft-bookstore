/**
 * A small box that has a title/description, with inputs for user book entry. Mimics book details page regular DetailBox
 * @param props
 * @param props.title {string} The title for the box.
 * @param props.subtitle {string} The subtitle for the box outlining what the user should write in input.
 * @param props.type {string} The type of the input allowed in the <input> element.
 * @param [props.colspan = 1] {number} col-span if defined.
 * @param [props.pattern = undefined]{string} A RegEx pattern that applies to the input, if defined.
 * @param [props.max = undefined]{number} A maximum on number inputs.
 * @constructor
 */
export default function DetailBoxInput(props: { title: string, type: string, subtitle: string, pattern?: string, colspan?: number, max?: number}) {
    return (
        <div className={`grid content-between netcompany-accent rounded-lg p-2 col-span-${props.colspan ? props.colspan.toString() : "1"} netcompany-accent-border border`}>
            <h2 className="text-sm leading-6 self-start">
                {props.title} *
            </h2>
            <input name={props.title.toLowerCase()}
                   type={props.type}
                   id={`${props.title.toLowerCase()}Input`}
                   max={props.max}
                   required
                   pattern={props.pattern}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </input>
            <p className="mt-3 text-xs leading-6 text-gray-600">
                {props.subtitle}
            </p>
        </div>
    );
}
