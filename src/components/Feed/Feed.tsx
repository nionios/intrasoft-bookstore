"use client";
import React, {useState} from "react";
import JobList from "@/components/JobList/JobList";
import UserSearchBox from "@/components/UserSearchBox/UserSearchBox";
import {UserInfo} from "@/types";
import {redirect} from "next/navigation";
import {useCookies} from "next-client-cookies";
import JobBox from "@/components/JobBox/JobBox";
/**
 * Feed component. Features a JobList and a UserSearchBox.
 * @constructor
 * @returns Feed of jobs
 */
export default function Feed(props: {initialJobs : Array<typeof JobBox>}) {
    const cookies = useCookies();
    // This is the state being updated by both children components UserSearchBox and JobList after initial prefetch.
    const [jobBoxes, setJobPosts] = useState(props.initialJobs);

    const handleJobBoxUpdate = (dataFromChild: Array<typeof JobBox>) => {
        // Update parent state jobBoxes with data received from child JobList.
        setJobPosts(dataFromChild);
    };
    // Get authentication token from the cookies to authenticate through api.
    let token: string | undefined = cookies.get('token');
    let userInfo: UserInfo;
    // If user has no authentication token, redirect to log in.
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
