import {UserInfo} from "@/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";
import fetchAllBooks from "@/lib/fetchAllBooks";
import {useCookies} from "next-client-cookies";
import populateBookBoxes from "@/lib/populateBookBoxes";
import {redirect} from "next/navigation";
import Link from "next/link";

/**
 * Search box also containing user info on homepage.
 * Gets input of user when user stops typing after timeout when onChange event of <input/> is fired.
 * @param props
 * @param props.userInfo {UserInfo} A UserInfo object with the user's personal info from endpoint
 * @constructor
 */
export default function UserSearchBox(props: { userInfo: UserInfo, onBookBoxUpdate: Function }) {
    const [keyword, setKeyword] = useState('');
    const token: string | undefined = useCookies().get("token");
    if (token === undefined) {
        // If token does not exist, user should authenticate again.
        redirect('/login')
    }
    // Search books when user stops typing for x ms. (Timeout as to not repeat search while user types)
    useEffect(() => {
        // Do not search on empty keyword.
        if (keyword !== "") {
            const delayDebounceFn = setTimeout(async () => {
                // On the end of the timeout, make the search to server and pass the results to parent <Feed/>
                props.onBookBoxUpdate(populateBookBoxes(await fetchAllBooks(token, 1, keyword, 25)));
            }, 1000)
            // Always clear timeout on useEffect.
            return () => clearTimeout(delayDebounceFn)
        }
    }, [token, keyword]);

    return (
        <div id="searchBox"
             className="grid rounded-lg grid-cols-3 drop-shadow-lg w-11/12 sm:fixed relative max-w-3xl p-5 m-5 mx-10 z-30">
            <div className="col-span-3 md:col-span-2">
                <div className="text-sm">
                    Hello,
                </div>
                <div className="text-lg">
                    {props.userInfo.userFirstName} {props.userInfo.userLastName}
                </div>
                <div className="text-sm">
                    {props.userInfo.userEmail}
                </div>
            </div>
            <div className="col-span-3 md:col-span-1 grid justify-center mt-3 md:mt-0 md:justify-items-end content-center">
                <Link className="btn-create bg-amber-400 btn-animate py-2 px-10 rounded-full w-40"
                      href="/book/create">Add A Book</Link>
            </div>
            <hr className="row-span-1 col-span-3 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div className="col-span-3">
                <label htmlFor="bookQuery"
                       className="block text-sm font-medium leading-6">
                    Search for a book
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                            <FontAwesomeIcon className="fill-netcompany-accent-dark"
                                             icon={faMagnifyingGlass}/>
                        </span>
                    </div>
                    <input type="text"
                           name="bookQuery"
                           id="bookQuery"
                           onChange={(e) => setKeyword(e.target.value)}
                           className="block w-full rounded-md border-0 py-1.5 pl-8 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           placeholder="Enter Keyword(s)..."/>
                </div>
            </div>
        </div>
    );
}
