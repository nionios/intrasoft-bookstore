"use client";
import React from "react";
import KarieraLogo from "@/components/KarieraLogo/KarieraLogo";
import LogoutButton from "@/components/Buttons/LogoutButton/LogoutButton";
import GlobeButton from "@/components/Buttons/GlobeButton/GlobeButton";

/**
 * @returns a NavBar, where routes are updated automatically.
 * @constructor
 */
const NavBar = () => {

    return (
        <nav>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center h-16 justify-between">
                    <div className="">
                        <KarieraLogo isMobile={true}/>
                    </div>
                    <div className="flex">
                        <div>
                            <GlobeButton/>
                        </div>
                        <div className="mx-3">
                            <LogoutButton className="btn-animate justify-end"
                                          loginRoute="login"
                                          isMobile={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
