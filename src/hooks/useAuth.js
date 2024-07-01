// import { useState } from "react";
// import useAuthContext from "../helpers/useAuthContext";
// import { apiReq } from "../helpers/apiReq";

// export const useAuth = () => {
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const { dispatch } = useAuthContext();

//     // context ?? token LS  >>>>>  nav to login 
//     // contect >> loading(false) error(false)
//     // contect ?? token >> valid  >> save user in context loading(false) error(false)
//     const login = async (idNum, password) => {
//         setLoading(true);
//         setError(null); // Reset error before each login attempt

//         try {
//             const response = await apiReq({ 
//                 url: "/auth/token", 
//                 method: "POST", 
//                 data: localStorage.token
//             });

//             // If the request is successful, handle the response
//             localStorage.user=JSON.stringify({
//                 tech: response.tech,
//                 token: response.token
//             })
//             dispatch({ type: "LOGIN", payload: response.tech, token: response.token });
//             console.log(`Login response:`, response);
//         } catch (error) {
//             // If there's an error, set the error state
//             console.error("Error logging in:", error.message);
//             setError(error.message || "An error occurred during login");
//         } finally {
//             // Set loading to false after the request is complete, regardless of outcome
//             setLoading(false);
//         }
//     };

//     return {  loading, error };
// };



// version 2--------------------
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../helpers/useAuthContext";
import { apiReq } from "../helpers/apiReq";

export const useAuth = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { dispatch, user, token } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token'); //no token in local storage

            if (!user && !token) {
                setLoading(false);
                navigate('/test/ilay');
                return;
            }

            if (!user && token) {
                try {
                    const response = await apiReq({
                        url: "/auth/refresh",
                        method: "POST",
                        data: { token }
                    });

                    localStorage.setItem('user', JSON.stringify(response.tech));
                    localStorage.setItem('token', response.token);
                    //localStorage.user=JSON.stringify({
                    //                 tech: response.tech,
                    //                 token: response.token})


                    dispatch({ type: "LOGIN", payload: response.tech, token: response.token });
                } catch (error) {
                    console.error("Error validating token:", error.message);
                    setError(error.message || "An error occurred during authentication");
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            }

            setLoading(false);
        };

        checkAuth();
    }, [dispatch, user, navigate]);

    const login = async (idNum, password) => {
        setLoading(true);
        setError(null);

        try {
            const response = await apiReq({
                url: "/auth/login",
                method: "POST",
                data: { idNum, password }
            });

            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.tech));

            dispatch({ type: "LOGIN", payload: response.tech, token: response.token });
        } catch (error) {
            console.error("Error logging in:", error.message);
            setError(error.message || "An error occurred during login");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch({ type: "LOGOUT" });
        navigate('/login');
    };

    return { login, logout, loading, error };
};