import Link from "next/link";
import Image from "next/image";
import companyImage from "@/../public/books/company.jpg"
import DetailBoxBar from "@/components/BookBox/BookBoxComponents/DetailBoxBar";
import BookBoxHeading from "@/components/BookBox/BookBoxComponents/BookBoxHeading";

export default function BookBox(props: {
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

    /* In production we would check if book entry is valid by comparing epochs and if it was not, we would not
     * display the bookbox by returning null on expired book entry. But no valid posts exist in endpoint
     * const todaysEpoch = (new Date(2010, 6, 26).getTime() / 1000); */
    /*
    if ( todaysEpoch - props.validUntil < 0) {
        return null;
    }
    */
    return (
        <li id={`bookPost${props.id}`}
            key={props.id}
            className={`grid grid-rows-auto grid-cols-3 md:grid-cols-5 animate-fade book-entry rounded-lg m-5 drop-shadow-lg gap-x-2 md:gap-x-6 p-5 gap-y-4`}>
            <div className="row-span-1 md:row-span-2 col-span-1 flex min-w-0 gap-x-1 mr-1">
                <Image className="rounded-md shrink-0 bg-gray-50"
                       width={150}
                       height={150}
                       src={companyImage}
                       alt="An image of a company building."/>
            </div>
            <div className="row-span-1 col-span-2 md:col-span-4 min-w-0 gap-x-4">
                <BookBoxHeading companyName={props.companyName} title={props.title}/>
            </div>
            <div className="grid row-span-1 col-span-3 md:col-span-4 grid-cols-3 md:grid-cols-4 grid-rows-1 gap-4 content-end">
                <DetailBoxBar createdAtHumanDate={createdAtHumanDate}
                              validUntilHumanDate={validUntilHumanDate}
                              address={props.address}/>
                <div className="hidden shrink-0 md:flex md:flex-col col-span-1 justify-end">
                    <Link href={`/book/${props.id}`}
                          className="text-sm btn-animate bg-secondary-brand-color text-white text-center rounded-lg py-2">
                        Apply Now
                    </Link>
                </div>
            </div>
            <Link href={`/book/${props.id}`}
                  className="btn-animate shrink-0 grid md:hidden row-span-1 bg-secondary-brand-color rounded-lg col-span-5 mt-3 py-2 justify-center content-center text-white text-center">
                Apply Now
            </Link>
        </li>
    );
}
