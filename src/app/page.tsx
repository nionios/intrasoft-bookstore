import { redirect } from "next/navigation"

/**
 * This page just redirects to home page.
 * @constructor
 */
export default function RootPage() {
    redirect('/home');
}
