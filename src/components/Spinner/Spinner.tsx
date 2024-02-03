import loader from "@/../public/graphics/loader.gif";
import Image from "next/image";

/**
 * @returns A spinner animation using an GIF image
 * @constructor
 */
export default function Spinner() {
    return (
        <div className="flex text-sm justify-center">
            <Image src={loader}
                   alt="Spinner"/>
            <span className="pl-5"> loading more jobs </span>
        </div>
    );
}
