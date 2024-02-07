"use client";
import React, {useState} from "react";
import ScrollTrigger from "react-scroll-trigger";
import JobList from "@/components/JobList/JobList";
import UserSearchBox from "@/components/UserSearchBox/UserSearchBox";
import {UserInfo} from "@/types";
/**
 * Feed component. Features a login modal popup when user scrolls down a specified amount of pixels.
 * (Scroll Trigger used)
 * @constructor
 * @returns Feed of jobs with a login popup on scroll
 * @param props
 * @param props.initialJobs {Array<JobBox>} An array with the initial jobs on page fetched from api.
 */
export default function Feed(props: { initialJobs: Array<any>, userInfo: UserInfo<any> }) {
    const [isVisible, setIsVisible] = useState();
    const onEnterViewport = () => setIsVisible(true);

    return (
        <>
            <UserSearchBox userInfo={props.userInfo}/>
            <JobList initialJobs={props.initialJobs}/>
            <div style={{position: "absolute", top: "2000px"}}>
                <ScrollTrigger onEnter={onEnterViewport}>
                    {isVisible ? /*</LoginModal>*/ null : null}
                </ScrollTrigger>
            </div>
        </>
    );
}
