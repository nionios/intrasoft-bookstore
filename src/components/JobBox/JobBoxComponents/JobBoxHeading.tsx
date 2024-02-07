/**
 * A heading for the JobBoxes displaying the company name and the title of the position offered.
 * @param props
 * @constructor
 */
export default function JobBoxHeading(props: {companyName: string, title: string}) {
    return (
        <>
            <div className="min-w-0 flex-auto">
                <p className="mt-1 truncate text-md leading-5 text-gray-500">
                    {props.companyName}
                </p>
                <p className="text-2xl font-semibold leading-6 text-gray-900 py-1">
                    {props.title}
                </p>
            </div>
        </>
    );
}
