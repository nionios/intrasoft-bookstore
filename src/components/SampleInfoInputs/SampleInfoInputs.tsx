/**
 * This is just a sample of a job application page, no info is actually sent to endpoint from here.
 */
export default function SampleInfoInputs () {
    return (
        <>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="cover-photo"
                                   className="block text-sm font-medium leading-6 ">Cover Letter</label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-300"
                                         viewBox="0 0 24 24"
                                         fill="currentColor"
                                         aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label htmlFor="file-upload"
                                               className="relative cursor-pointer rounded-md bg-white font-semibold  focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload"
                                                   name="file-upload"
                                                   type="file"
                                                   className="sr-only"/>
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF, PDF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="reference"
                           className="block text-sm font-medium leading-6 mt-3 ">
                        Can someone refer you?
                    </label>
                    <div className="mt-2">
                        <input id="reference"
                               name="reference"
                               type="text"
                               autoComplete="full-name"
                               placeholder="Enter name & surname..."
                               required
                               className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12 pt-6">
                <h2 className="text-base font-semibold leading-7 ">Notifications</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">We will always let you know about important changes,
                    but you pick what else you want to hear about.</p>
                <div className="mt-10 space-y-10">
                    <fieldset>
                        <legend className="text-sm font-semibold leading-6 ">By Email</legend>
                        <div className="mt-6 space-y-6">
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                <input id="comments"
                                           name="comments"
                                           type="checkbox"
                                           className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-600"/>
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="comments"
                                           className="font-medium ">
                                        Interest in Company
                                    </label>
                                    <p className="text-gray-500">
                                        Get notified when a job opening by this company is posted.
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input id="candidates"
                                           name="candidates"
                                           type="checkbox"
                                           className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-600"/>
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="candidates"
                                           className="font-medium ">Similar Jobs</label>
                                    <p className="text-gray-500">Get notified when a similar job is a match for you</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    );
}
