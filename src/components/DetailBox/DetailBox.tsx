/**
 * A small box that has a title and a subtitle for details (like location of book offer)
 * @param props
 * @param props.title {string} The title for the box.
 * @param props.subtitle {string} The text immediately under the title.
 * @param props.colspan {number} Default: 1, col-span if defined.
 * @param props.truncated {boolean} Whether the text should be truncated.
 * @constructor
 */
export default function DetailBox(props: { title: string, subtitle: string, colspan?: number, truncated?: boolean }) {
    return (
        <div className={`grid content-between netcompany-accent rounded-lg p-2 col-span-${props.colspan ? props.colspan.toString() : "1"} netcompany-accent-border border`}>
            <h2 className="text-sm leading-6 self-start">
                {props.title}
            </h2>
            <div className={`text-md leading-6 text-gray-900 self-end ${props.truncated ? "line-clamp-1 sm:whitespace-nowrap" : null}`}>
                {props.subtitle}
            </div>
        </div>
    );
}
