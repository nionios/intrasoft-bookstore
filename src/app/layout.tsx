import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar/Navbar"
import {CookiesProvider} from 'next-client-cookies/server';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "SEAD Next.js test site",
    description: "Generated by create next app",
};

export default function RootLayout(props: Readonly<{
    children: React.ReactNode,
    auth: React.ReactNode
}>) {
    return (
        <html lang="en">
        <CookiesProvider>
            <body className={inter.className}>
            <NavBar/>
            {props.auth}
            {props.children}
            </body>
        </CookiesProvider>
        </html>
    );
}
