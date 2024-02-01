/**
 * @returns A spinner animation using an SVG from Tailwind.css
 * @constructor
 */
export default function Spinner () {
    return (
        <svg className="animate-spin h-5 w-5 mr-3"
             viewBox="0 0 24 24">
        </svg>
    );
}
