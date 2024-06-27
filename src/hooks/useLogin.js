// // import { useState } from "react";
// // import useAuthContext from "../helpers/useAuthContext";
// // import { apiReq } from "../helpers/apiReq";

// // export const useLogin = () => {
// //     const [error, setError] = useState(null);
// //     const [loading, setLoading] = useState(false);
// //     const { dispatch } = useAuthContext();


// //     const login = async (idNum, password) => {
// //         setLoading(true);
// //         // setError(null);


// //         const response = await apiReq({ url: "/auth/login", method: "POST", data: { idNum, password } })
// //         localStorage.setItem("user", JSON.stringify(response.tech));
// //         dispatch({ type: "LOGIN", payload: response.tech });
// //         setLoading(false);

// //     }

// //     return { login, loading, error };

// // }


// // version2---------------------
//  import { useState } from "react";
//  import useAuthContext from "../helpers/useAuthContext";
//  import { apiReq } from "../helpers/apiReq";
// import useApi from "./useApi";

// export const useLogin = () => {
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const { dispatch } = useAuthContext();
  
//     const login = async (idNum, password) => {
//       setLoading(true);
//       setError(null); // Reset error before each login attempt
      
//       const response = await apiReq({ url: "/auth/login", method: "POST", data: { idNum, password } });
  
//       try {
//         const apiReqresult = await response;
//         localStorage.setItem("user", JSON.stringify(response.tech,response.token));
//         // token flat
//         dispatch({ type: "LOGIN", payload: response.tech });
//       } catch (error) {
//         // Catch errors thrown from apiReq
//         console.error("Error logging in:", error.message);
//         setError(error.message); // Set the error state
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     return { login, loading, error };
//   };
  




import { useState } from "react";
import useAuthContext from "../helpers/useAuthContext";
import { apiReq } from "../helpers/apiReq";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (idNum, password) => {
        setLoading(true);
        setError(null); // Reset error before each login attempt

        try {
            const response = await apiReq({ 
                url: "/auth/login", 
                method: "POST", 
                data: { idNum, password } 
            });

            // If the request is successful, handle the response
            localStorage.user=JSON.stringify({
                tech: response.tech,
                token: response.token
            })
            dispatch({ type: "LOGIN", payload: response.tech, token: response.token });
            console.log(`Login response:`, response);
        } catch (error) {
            // If there's an error, set the error state
            console.error("Error logging in:", error.message);
            setError(error.message || "An error occurred during login");
        } finally {
            // Set loading to false after the request is complete, regardless of outcome
            setLoading(false);
        }
    };

    return { login, loading, error };
};