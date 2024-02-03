import {useEffect, useRef, useState} from "react";

export default function JobBox(props: {
        id: number,
        companyName: string,
        address: string,
        createdAt : number,
        validUntil : number,
        title : string,
        description : string
}) {
    // const [fadeIn, setFadeIn] = useState(false);
    //
    // useEffect(() => {
    //     setFadeIn(true);
    // }, []);
    /**
     * Helper function to format dates nicely into "X days/seconds/minutes before" strings.
     * @param inputEpoch {number} The UNIX epoch input that signifies a date in the past.
     * @returns {string} "X days/seconds/minutes before" string or "Just now"
     */
    const formatDateDifference = (inputEpoch: number) => {
        const currentDate = new Date();
        const timeDifference = currentDate - new Date(inputEpoch);

        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours   = Math.floor(minutes / 60);
        const days    = Math.floor(hours / 24);

        if (days > 0) {
            return days + " days ago";
        } else if (hours > 0) {
            return hours + " hours ago";
        } else if (minutes > 0) {
            return minutes + " minutes ago";
        } else {
            return "Just now";
        }
    }


    // Contruct dates from epoch shared from api.
    const createdAt = new Date(props.createdAt).toISOString().substring(0,10);
    const createdAtDifference = formatDateDifference(props.createdAt);

    /* In production we would check if job post is valid by comparing epochs and if it was not, we would not
     * display the jobbox by returning null on expired job post. But no valid posts exist in endpoint
     * const todaysEpoch = (new Date(2010, 6, 26).getTime() / 1000); */
    /*
    if ( todaysEpoch - props.validUntil < 0) {
        return null;
    }
    */

    return (
        <li key={props.id} className={`flex fade ${true ? "opacity-100" : "opacity-0"} justify-between gap-x-6 py-5`}>
            <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50"
                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt=""/>
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                        {props.companyName}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {props.title}
                    </p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                    {props.address}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                    Posted <time dateTime={createdAt}>{createdAtDifference}</time>
                </p>
            </div>
        </li>
    );
}
