"use client";
import React from "react";
import Link from 'next/link'
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
                <div className="relative flex h-16 items-center justify-center">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            {/* Icon when menu is open. */}
                            <svg
                                className="hidden h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-end justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <KarieraLogo isMobile={true}/>
                        </div>
                    </div>
                    <div className="flex flex-1 items-end justify-end">
                        <div className="mr-6">
                            <div className="flex space-x-4">
                                <GlobeButton/>
                                <LogoutButton className="btn-animate justify-end"
                                              loginRoute="login"
                                              isMobile={false}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div className="sm:hidden"
                 id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
