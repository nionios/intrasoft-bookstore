import JobBox from "@/components/JobBox/JobBox";

/**
 * Creates an array of JobBoxes and fills them with job info from input array.
 * @param jobs {Array}
 */
const populateJobBoxes = (jobs: Array<any>) => {
    const jobBoxes: Array<typeof JobBox> = [];
    jobs.forEach(job => {
        jobBoxes.push(JobBox(job));
    });
    return jobBoxes;
}

export default populateJobBoxes;
