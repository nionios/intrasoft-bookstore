import LoginForm from "@/components/LoginForm/LoginForm";

/**
 * If we are on a different page, render login form onto modal with interception instead of navigating to login.
 * @constructor
 */
export default function LoginModal() {
    return (
        <div className="relative z-10 duration-1000"
             aria-labelledby="modal-title"
             role="dialog"
             aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 blur-lg transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <LoginForm></LoginForm>
            </div>
        </div>
    );
}
