"use client";
import React, {useState} from "react";
import BookList from "@/components/BookList/BookList";
import UserSearchBox from "@/components/UserSearchBox/UserSearchBox";
import {BookBoxType, UserInfo} from "@/types";
import {redirect} from "next/navigation";
import {useCookies} from "next-client-cookies";
import BookBox from "@/components/BookBox/BookBox";
/**
 * Feed component. Features a BookList and a UserSearchBox.
 * @constructor
 * @returns Feed of books
 */
export default function Feed(props: {initialBooks : Array<BookBoxType>}) {
    const cookies = useCookies();
    // This is the state being updated by both children components UserSearchBox and BookList after initial prefetch.
    const [bookBoxes, setBookPosts] = useState(props.initialBooks);

    const handleBookBoxUpdate = (dataFromChild: Array<BookBoxType>) => {
        // Update parent state bookBoxes with data received from child BookList.
        setBookPosts(dataFromChild);
    };
    // Get authentication token from the cookies to authenticate through api.
    let token: string | undefined = cookies.get('token');
    let userInfo: UserInfo;
    // If user has no authentication token, redirect to log in.
    if (typeof (token) === "undefined") {
        redirect("/home");
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
                           onBookBoxUpdate={handleBookBoxUpdate}/>
            <BookList bookBoxes={bookBoxes}
                      onBookBoxUpdate={handleBookBoxUpdate}/>
        </>
    );
}
