"use client";

import LoginButton from "@/components/Buttons/LoginButton/LoginButton";
import JobBoxDetailed from "@/components/JobBox/JobBoxDetailed";

/**
 * The application form for the job details/application page.
 * @param props
 * @param props.retrievedJobBox {typeof JobBoxDetailed} A Detailed Job Box component with selected job info.
 * @constructor
 */
export default function JobApplicationForm (props: {retrievedJobBox : typeof JobBoxDetailed}) {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            {props.retrievedJobBox}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form id="applyForm"
                      className="space-y-6">
                    <div>
                    <label htmlFor="number"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Years of Experience
                        </label>
                        <div className="mt-2">
                            <input id="jobPostId"
                                   name="id"
                                   type="number"
                                   autoComplete="number"
                                   value={1}
                                   hidden
                                   readOnly={true}
                                   required/>
                            <input id="yearsOfExperience"
                                   name="yearsOfExperience"
                                   type="number"
                                   autoComplete="number"
                                   required
                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div>
                        <LoginButton buttonText="Log In"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
