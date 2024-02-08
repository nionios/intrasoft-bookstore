"use client";

import type {JobBoxDetailedType} from "@/types";
import {ReactNode} from "react";

/**
 * The application form for the job details/application page.
 * @param props
 * @param props.retrievedJobBox {typeof JobBoxDetailed} A Detailed Job Box component with selected job info.
 * @constructor
 */
export default function JobApplicationForm(props: { retrievedJobBox: JobBoxDetailedType }) {
    return (
        <div className="max-w-3xl flex min-h-full flex-col justify-center px-6 py-3 lg:px-8 sm:mx-auto mx-0">
            <form id="applyForm"
                  className="space-y-6">
                {props.retrievedJobBox as unknown as ReactNode}
            </form>
        </div>
    );
}
