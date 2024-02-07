import {UserInfo} from "@/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";
import fetchAllJobs from "@/lib/fetchAllJobs";
import {useCookies} from "next-client-cookies";
import populateJobBoxes from "@/lib/populateJobBoxes";

/**
 * Search box also containing user info on homepage.
 * Gets input of user when user stops typing after timeout when onChange event of <input/> is fired.
 * @param props
 * @param props.userInfo {UserInfos} - A UserInfo object with the user's personal info from endpoint
 * @constructor
 */
export default function UserSearchBox(props: { userInfo: UserInfo, onJobBoxUpdate : Function}) {
    const [keyword, setKeyword] = useState('');
    const cookies = useCookies();
    // Search jobs when user stops typing for x ms. (Timeout as to not repeat search while user types)
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            // On the end of the timeout, make the search to server and pass the results to parent <Feed/>
            props.onJobBoxUpdate(fetchAllJobs(cookies, 1, keyword, 25));
        }, 1000)
        // Always clear timeout on useEffect.
        return () => clearTimeout(delayDebounceFn)
    }, [cookies, keyword]);

    return (
        <div id="searchBox"
             className="grid rounded-lg drop-shadow-lg w-full max-w-3xl p-5 m-5">
            <div className="text-sm">
                Hello,
            </div>
            <div className="text-lg">
                {props.userInfo.userFirstName} {props.userInfo.userLastName}
            </div>
            <div className="text-sm">
                {props.userInfo.userEmail}
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div>
                <label htmlFor="jobQuery"
                       className="block text-sm font-medium leading-6">
                    Search for a job
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                            <FontAwesomeIcon className="fill-kariera-accent-dark" icon={faMagnifyingGlass} />
                        </span>
                    </div>
                    <input type="text"
                           name="jobQuery"
                           id="jobQuery"
                           onChange={(e) => setKeyword(e.target.value)}
                           className="block w-full rounded-md border-0 py-1.5 pl-8 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           placeholder="Enter Keyword(s)..."/>
                </div>
            </div>
        </div>
    );
}
