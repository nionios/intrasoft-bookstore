import Link from "next/link";

export default function Succeess() {
    return (
        <div className="text-center mx-auto my-52">
            <div className="text-7xl">✔</div>
            <div className="text-xl">Application successful!</div>
            <div className="my-11">
                <Link className="btn-red btn-animate rounded-full px-10 py-3"
                      href="/home">
                    Back to the homepage
                </Link>
            </div>
        </div>
    );
}
