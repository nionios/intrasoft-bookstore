import JobBox from "@/components/JobBox/JobBox";

export default function JobList () {

    const JobBoxes = [];
    for (let i=0; i<50; i++) {
        JobBoxes.push(JobBox());
    }

    return (
        <ul role="list"
            className="divide-y divide-gray-100">
            {JobBoxes}
        </ul>
    );
}
