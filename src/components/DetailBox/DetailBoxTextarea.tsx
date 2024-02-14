/**
 * A small box that has a title and a subtitle for details, this is used as input on creation.
 * @param props
 * @param props.title {string} The title for the box.
 * @param props.subtitle {string} The text immediately under the title.
 * @param props.colspan {number} Default: 1, col-span if defined.
 * @param props.truncated {boolean} Whether the text should be truncated.
 * @constructor
 */
export default function DetailBoxTextarea(props: { title: string, subtitle: string, colspan?: number }) {
    return (
        <div className={`grid content-between netcompany-accent rounded-lg p-2 col-span-${props.colspan ? props.colspan.toString() : "1"} netcompany-accent-border border`}>
            <h2 className="text-sm leading-6 self-start">
                {props.title}
            </h2>
            <div className={`text-md leading-6 text-gray-900 self-end`}>
                <div className="mt-2">
                        <textarea id={`${props.title.toLowerCase()}`}
                                  name={`${props.title.toLowerCase()}`}
                                  rows={3}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </textarea>
                </div>
                <p className="mt-3 text-xs leading-6 text-gray-600">
                    {props.subtitle}
                </p>
            </div>
        </div>
    );
}
