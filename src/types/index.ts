import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";

/**
 * User information object that contains all the personal info of user returned from endpoint.
 */
export type UserInfo = {
    userLastName: RequestCookie | undefined,
    userEmail: RequestCookie | undefined,
    userFirstName: RequestCookie | undefined,
}
