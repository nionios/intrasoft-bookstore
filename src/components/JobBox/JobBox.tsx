import DetailBox from "@/components/DetailBox/DetailBox";
import SubmitButton from "@/components/Buttons/SubmitButton/SubmitButton";
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
            className={`grid grid-rows-2 grid-cols-5 animate-fade job-post rounded-lg m-5 drop-shadow-lg gap-x-6 p-5`}>
            <div className="row-span-2 col-span-1 min-w-0 gap-x-1">
                <Image className="flex-none rounded-md bg-gray-50"
                       width={200}
                       height={200}
                       src={companyImage}
                       alt="An image of a company building."/>
            </div>
            <div className="row-span-1 col-span-4 min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                    <p className="mt-1 truncate text-md leading-5 text-gray-500">
                        {props.companyName}
                    </p>
                    <p className="text-2xl font-semibold leading-6 text-gray-900 py-1">
                        {props.title}
                    </p>
                </div>
            </div>
            <div className="grid row-span-1 col-span-4 grid-cols-4 grid-rows-1 gap-4 content-end">
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
                <div className="grid col-span-1 justify-center content-center">
                    <Link href="#" className="bg-secondary-brand-color text-white rounded-xl px-10 py-1">
                        Apply Now
                    </Link>
                </div>
            </div>
        </li>
);
}
