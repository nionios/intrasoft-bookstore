/**
 * A small box that has a title and a subtitle for details (like location of book offer)
 * @param props
 * @param props.title - The title for the box.
 * @param props.subtitle - The text immediately under the title.
 * @constructor
 */
export default function DetailBox(props: { title: string, subtitle: string }) {
    return (
        <div className="netcompany-accent rounded-lg p-2 netcompany-accent-border border grid content-between">
            <h2 className="text-sm leading-6">
                {props.title}
            </h2>
            <div className="text-md leading-6 text-gray-900 sm:whitespace-nowrap">
                {props.subtitle}
            </div>
        </div>
    );
}
