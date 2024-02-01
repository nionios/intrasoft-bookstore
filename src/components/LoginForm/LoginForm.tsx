import SubmitButton from "@/components/SubmitButton/SubmitButton";
import KarieraLogo from "@/components/KarieraLogo/KarieraLogo";

export default function LoginForm () {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <KarieraLogo isMobile={false}/>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form id="loginForm" className="space-y-6">
                    <div>
                        <label htmlFor="email"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input id="email"
                                   name="email"
                                   type="email"
                                   autoComplete="email"
                                   required
                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password"
                                   className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <a href="#"
                                   className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot
                                    password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password"
                                   name="password"
                                   type="password"
                                   autoComplete="current-password"
                                   required
                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div>
                        <SubmitButton buttonText="Log In"></SubmitButton>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a href="#"
                       className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial</a>
                </p>
            </div>
        </div>
    );
}
