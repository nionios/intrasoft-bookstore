"use client";

import LoginButton from "@/components/Buttons/LoginButton/LoginButton";
import JobBoxDetailed from "@/components/JobBox/JobBoxDetailed";

/**
 * The application form for the job details/application page.
 * @param props
 * @param props.retrievedJobBox {typeof JobBoxDetailed} A Detailed Job Box component with selected job info.
 * @constructor
 */
export default function JobApplicationForm(props: { retrievedJobBox: typeof JobBoxDetailed }) {
    return (
        <div className="max-w-3xl flex min-h-full flex-col justify-center px-6 py-3 lg:px-8 sm:mx-auto mx-0">
            <form id="applyForm"
                  className="space-y-6">
                {props.retrievedJobBox}
            </form>
        </div>
    );
}
