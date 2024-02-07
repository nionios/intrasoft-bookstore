import type {Metadata} from "next";
import {Source_Sans_3} from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar/Navbar"
import {CookiesProvider} from 'next-client-cookies/server';

const sourceSans3 = Source_Sans_3({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Kariera.gr Front End Challenge",
    description: "Made by Dionisis Nikolopoulos",
};

export default function RootLayout(props: Readonly<{
    children: React.ReactNode,
    auth: React.ReactNode
}>) {
    return (
        <html lang="en">
        <CookiesProvider>
            <body className={sourceSans3.className}>
            <NavBar/>
            {props.auth}
            {props.children}
            </body>
        </CookiesProvider>
        </html>
    );
}
