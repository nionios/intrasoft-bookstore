import LoginModal from "@/components/LoginModal/LoginModal";

/**
 * If we are on a different page, render login form onto modal with interception instead of navigating to login.
 * @constructor
 */
export default function authPopup() {
    return (
        <LoginModal/>
    );
}
