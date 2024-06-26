// import { useState } from "react";
// import useAuthContext from "../helpers/useAuthContext";
// import { apiReq } from "../helpers/apiReq";

// export const useLogin = () => {
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const { dispatch } = useAuthContext();


//     const login = async (idNum, password) => {
//         setLoading(true);
//         // setError(null);


//         const response = await apiReq({ url: "/auth/login", method: "POST", data: { idNum, password } })
//         localStorage.setItem("user", JSON.stringify(response.tech));
//         dispatch({ type: "LOGIN", payload: response.tech });
//         setLoading(false);

//     }

//     return { login, loading, error };

// }


// version2---------------------
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
        const response = await apiReq({ url: "/auth/login", method: "POST", data: { idNum, password } });
        localStorage.setItem("user", JSON.stringify(response.tech));
        // token flat
        dispatch({ type: "LOGIN", payload: response.tech });
      } catch (error) {
        // Catch errors thrown from apiReq
        console.error("Error logging in:", error.message);
        setError(error.message); // Set the error state
      } finally {
        setLoading(false);
      }
    };
  
    return { login, loading, error };
  };
  