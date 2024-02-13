/**
 * This is just a sample of a book application page, no info is actually sent to endpoint from here.
 */
export default function SampleInfoInputs () {
    return (
        <>
            <div className="border-b border-gray-900/10 pb-6 pt-6">
                <h2 className="text-base font-semibold leading-7">Notifications</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">We will always let you know about important changes,
                    but you pick what else you want to hear about.</p>
                <div className="mt-3 space-y-10">
                    <fieldset>
                        <legend className="text-sm font-semibold leading-6">
                            By Email
                        </legend>
                        <div className="mt-3 space-y-6">
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
                                        Interest in Author
                                    </label>
                                    <p className="text-gray-500">
                                        Get notified when a book from this author is being sold.
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
                                           className="font-medium ">Similar Books</label>
                                    <p className="text-gray-500">Get notified when a similar book is a match for you.</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    );
}
