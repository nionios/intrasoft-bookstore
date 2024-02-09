"use client";
import React, {useEffect, useState} from "react";
import InstrasoftLogo from "@/components/IntrasoftLogo/InstrasoftLogo";
import GlobeButton from "@/components/Buttons/GlobeButton/GlobeButton";
import Link from "next/link";
import { usePathname } from 'next/navigation'

/**
 * @returns a NavBar, where routes are updated automatically.
 * @constructor
 */
const NavBar = () => {
    const [inLoginPage, setInLoginPage] = useState(true);
    const pathname = usePathname();

    // If in login page, set the login page flag on as to not display logout button.
    useEffect(() => {
        if (pathname === '/login') setInLoginPage(true);
        else setInLoginPage(false);
    }, [pathname]);

    return (
        <nav className="shadow">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center h-16 justify-between">
                    <div>
                        <InstrasoftLogo width="100"/>
                    </div>
                    <div className="flex">
                        <div className="self-center">
                            <GlobeButton/>
                        </div>
                        {inLoginPage ? null :
                            <div className="mx-3">
                                <Link href="/login"
                                      className="btn-animate justify-end btn-red text-white block rounded-xl px-10 py-2 text-base font-medium">
                                    Logout
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
