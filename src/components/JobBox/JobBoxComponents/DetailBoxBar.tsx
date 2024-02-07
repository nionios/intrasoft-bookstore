import DetailBox from "@/components/DetailBox/DetailBox";

/**
 * @returns Three DetailBox components to be placed in a grid.
 * @param props
 * @param props.createdAtHumanDate {string} Date string of posting formatted
 * @param props.validUntilHumanDate {string} Date string of expiration formatted.
 * @param props.address {string} The location of the job.
 * @constructor
 */
export default function DetailBoxBar(props : {createdAtHumanDate: string, validUntilHumanDate: string, address: string}) {
    return (<>
            <div className="grid col-span-1">
                <DetailBox title="Date Posted"
                           subtitle={props.createdAtHumanDate}/>
            </div>
            <div className="grid col-span-1">
                <DetailBox title="Apply Until"
                           subtitle={props.validUntilHumanDate}/>
            </div>
            <div className="grid col-span-1">
                <DetailBox title="Location"
                           subtitle={props.address}/>
            </div>
        </>
    );
}
