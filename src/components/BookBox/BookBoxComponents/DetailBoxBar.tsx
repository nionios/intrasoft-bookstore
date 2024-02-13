import DetailBox from "@/components/DetailBox/DetailBox";
import Stars from "@/components/Stars/Stars";

/**
 * @returns Three DetailBox components to be placed in a grid.
 * @param props
 * @param props.createdAtHumanDate {string} Date string of posting formatted
 * @param props.publisher {string} Date string of the book's publisher.
 * @param props.address {string} The location of the book.
 * @constructor
 */
export default function DetailBoxBar(props : {createdAtHumanDate: string, publisher: string}) {
    return (<>

            <div className="grid col-span-1">
                <DetailBox title="Published"
                           subtitle={props.createdAtHumanDate}
                           truncated={true}/>
            </div>
            <div className="grid col-span-1">
                <DetailBox title="Publisher"
                           subtitle={props.publisher}
                           truncated={true}/>
            </div>
        </>
    );
}
