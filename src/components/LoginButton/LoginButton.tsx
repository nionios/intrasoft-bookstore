import Link from "next/link";
import React from "react";

/**
 * Login Button Component. Has different css from other buttons.
 * @param props
 * @param props.loginRoute {string} - The route that will be rendered upon clicking the login button
 * @param props.className {string} - Additional class string to inject classnames into component.
 * @param props.isMobile {boolean} - A boolean prop that renders the button for mobile devices.
 * @constructor
 */
export default function LoginButton(props: {loginRoute: string, className: string, isMobile: boolean}) {
    return (
        <Link href={`/${props.loginRoute}`}
              className={`${props.className}
                  ${props.isMobile ?
                  "bg-secondary-brand-color text-white block rounded-xl px-4 py-2 text-base font-medium" :
                  "bg-secondary-brand-color text-white rounded-xl px-10 py-2 text-sm font-medium"}`}
              style={{textTransform: "capitalize"}}>
            {props.loginRoute}
        </Link>
    );
}
