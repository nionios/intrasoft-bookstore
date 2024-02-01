"use client";
import React, {useState} from "react";
import ScrollTrigger from "react-scroll-trigger";
import LoginModal from "@/components/LoginModal/LoginModal";
import JobList from "@/components/JobList/JobList";

/**
 * Feed component. Features a login modal popup when user scrolls down a specified amount of pixels.
 * (Scroll Trigger used)
 * @constructor
 * @returns Feed of jobs with a login popup on scroll.
 */
export default function Feed() {
    const [isVisible, setIsVisible] = useState();
    const onEnterViewport = () => setIsVisible(true);

    return (
        <>
            <JobList/>
            <div style={{position: "absolute", top: "2000px"}}>
                <ScrollTrigger onEnter={onEnterViewport}>
                    {isVisible ? <LoginModal/> : null}
                </ScrollTrigger>
            </div>
        </>
    );
}
