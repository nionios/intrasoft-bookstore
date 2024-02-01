import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

const AuthContext = createContext();
/**
 * Provider for the authentication context. Authentication with JWT and Bearer token.
 * Makes our axios requests carry the authentication token (JWT) with an Authorization Header when token is present
 * in localStorage.
 * @param props
 * @param props.children {React.ReactNode}
 * @returns The children components wrapped with the AuthContext.Provider (along with the contextValue as value)
 * @constructor
 */
const AuthProvider = (props: {children: React.ReactNode}) => {
    // Get token from localStorage if it exists. Set state accordingly.
    const [token, setToken_] = useState(localStorage.getItem("token"));
    /**
     * Wrapper function for setter setToken_, stores token value in the localStorage.
     * Used like this to encapsulate and be flexible to changes in the future.
     * @param newToken
     */
    const setToken = (newToken) => {
        setToken_(newToken);
    };
    // Construct authorization header in Axios, depending on whether the auth token exists.
    // This function runs whenever a change is detected in token.
    useEffect(() => {
        if (token) {
            // Set the Bearer token with our token in localStorage
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token',token);
        } else {
            // No auth header when no token exists.
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
        }
    }, [token]);
    // Cache token (memoization)
    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;

