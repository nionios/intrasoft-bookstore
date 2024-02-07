import DetailBox from "@/components/DetailBox/DetailBox";
import Link from "next/link";
import Image from "next/image";
import companyImage from "@/../public/jobs/company.jpg"

export default function JobBox(props: {
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
        <li id={`jobPost${props.id}`}
            key={props.id}
            className={`grid grid-rows-auto grid-cols-3 md:grid-cols-5 animate-fade job-post rounded-lg m-5 drop-shadow-lg gap-x-2 md:gap-x-6 p-5 gap-y-4`}>
            <div className="row-span-1 md:row-span-2 col-span-1 flex min-w-0 gap-x-1 mr-1">
                <Image className="rounded-md shrink-0 bg-gray-50"
                       width={150}
                       height={150}
                       src={companyImage}
                       alt="An image of a company building."/>
            </div>
            <div className="row-span-1 col-span-2 md:col-span-4 min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                    <p className="mt-1 truncate text-md leading-5 text-gray-500">
                        {props.companyName}
                    </p>
                    <p className="text-2xl font-semibold leading-6 text-gray-900 py-1">
                        {props.title}
                    </p>
                </div>
            </div>
            <div className="grid row-span-1 col-span-3 md:col-span-4 grid-cols-3 md:grid-cols-4 grid-rows-1 gap-4 content-end">
                <div className="grid col-span-1">
                    <DetailBox title="Date Posted"
                               subtitle={createdAtHumanDate}/>
                </div>
                <div className="grid col-span-1">
                    <DetailBox title="Apply Until"
                               subtitle={validUntilHumanDate}/>
                </div>
                <div className="grid col-span-1">
                    <DetailBox title="Location"
                               subtitle={props.address}/>
                </div>
                <div className="hidden shrink-0 md:flex md:flex-col col-span-1 justify-end">
                    <Link href="#"
                          className="text-sm btn-animate bg-secondary-brand-color text-white text-center rounded-lg py-2">
                        Apply Now
                    </Link>
                </div>
            </div>
            <Link href="#"
                  className="btn-animate shrink-0 grid md:hidden row-span-1 bg-secondary-brand-color rounded-lg col-span-5 mt-3 py-2 justify-center content-center text-white text-center">
                    Apply Now
            </Link>
        </li>
    );
}
