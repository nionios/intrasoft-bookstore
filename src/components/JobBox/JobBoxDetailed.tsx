import Image from "next/image";
import companyImage from "@/../public/jobs/company.jpg"
import JobBoxHeading from "@/components/JobBox/JobBoxComponents/JobBoxHeading";
import DetailBoxBar from "@/components/JobBox/JobBoxComponents/DetailBoxBar";
import JobApplicationInput from "@/components/JobApplicationForm/JobApplicationInput";
// To Avoid using dangerouslySetInnerHTML. This package is safer, it uses ReactDOM.Render(),
// dangerouslySetInnerHTML skips it completely.
import parse from 'html-react-parser';

/**
 * A JobBox that has the job description, shows up on the individual job page and not on homepage.
 * @param props
 * @constructor
 */
export default function JobBoxDetailed(props: {
    id: number,
    companyName: string,
    address: string,
    createdAt: number,
    validUntil: number,
    title: string,
    description: string
}) {
    // Contruct dates from epoch shared from api.
    const createdAtHumanDate = new Date(props.createdAt).toDateString().substring(4, 10);
    const validUntilHumanDate = new Date(props.validUntil).toDateString().substring(4, 10);

    /* In production we would check if job post is valid by comparing epochs and if it was not, we would not
     * display the jobbox by returning null on expired job post. But no valid posts exist in endpoint
     * const todaysEpoch = (new Date(2010, 6, 26).getTime() / 1000); */
    /*
    if ( todaysEpoch - props.validUntil < 0) {
        return null;
    }
    */

    return (
        <div id={`jobPost${props.id}Details`}
             className={`grid grid-rows-auto grid-cols-3 md:grid-cols-5 animate-fade job-post rounded-lg m-5 drop-shadow-lg gap-x-2 md:gap-x-6 p-5 gap-y-4`}>
            <div className="row-span-1 col-span-1 flex min-w-0 gap-x-1 mr-1">
                <Image className="rounded-md shrink-0 bg-gray-50"
                       width={150}
                       height={150}
                       src={companyImage}
                       alt="An image of a company building."/>
            </div>
            <div className="row-span-1 col-span-2 md:col-span-4 min-w-0 gap-x-4">
                <JobBoxHeading companyName={props.companyName}
                               title={props.title}/>
            </div>
            <div className="grid row-span-1 col-span-3 md:col-span-4 grid-cols-3 md:grid-cols-4 grid-rows-1 gap-4 content-end">
                <DetailBoxBar createdAtHumanDate={createdAtHumanDate}
                              validUntilHumanDate={validUntilHumanDate}
                              address={props.address}/>
            </div>
            <div className="row-span-1 col-span-3 md:col-span-4 min-w-0 gap-x-4">
                <div className="text-md font-semibold leading-6 text-gray-900 py-1">
                    {parse(props.description)}
                </div>
            </div>
            <div className="row-span-1 col-span-full min-w-0 gap-x-4">
                <JobApplicationInput/>
            </div>
        </div>
    );
}
