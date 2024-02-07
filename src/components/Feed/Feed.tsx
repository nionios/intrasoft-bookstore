"use client";
import React, {useState} from "react";
import JobList from "@/components/JobList/JobList";
import UserSearchBox from "@/components/UserSearchBox/UserSearchBox";
import {UserInfo} from "@/types";
import populateJobBoxes from "@/lib/populateJobBoxes";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {redirect} from "next/navigation";
import fetchJobs from "@/lib/fetchJobs";
import {useCookies} from "next-client-cookies";
import JobBox from "@/components/JobBox/JobBox";
/**
 * Feed component. Features a JobList and a UserSearchBox.
 * @constructor
 * @returns Feed of jobs
 */
export default function Feed(props: {initialJobs : Array<typeof JobBox>}) {
    const cookies = useCookies();

    const [jobBoxes, setJobPosts] = useState(props.initialJobs);

    const handleJobBoxUpdate = (dataFromChild: Array<typeof JobBox>) => {
        // Update parent state jobBoxes with data received from child JobList.
        setJobPosts(dataFromChild);
    };

    let token: RequestCookie | undefined = cookies.get('token');
    let userInfo: UserInfo;
    // If user has no authentication token, redirect to login.
    if (typeof (token) === "undefined") {
        redirect("/login");
    } else {
        // Populate userInfo object with the info fetched from endpoint during or from previous login.
        userInfo = {
            userEmail:     cookies.get('userEmail'),
            userFirstName: cookies.get('userFirstName'),
            userLastName:  cookies.get('userLastName'),
        }
    }

    return (
        <>
            <UserSearchBox userInfo={userInfo}
                           onJobBoxUpdate={handleJobBoxUpdate}/>
            <JobList jobBoxes={jobBoxes}
                     onJobBoxUpdate={handleJobBoxUpdate}/>
        </>
    );
}
