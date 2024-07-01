// import { createContext, useEffect, useReducer } from "react";

// export const AuthContext = createContext();

// export const authReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         user: action.payload,
//         token: action.token
//       };
//     case "LOGOUT":
//       return {
//         user: null,
//         token: null
//       };
//     default:
//       return state;
//   }
// };

// export function  AuthContextProvider({ children }) {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//     token: null
//   });

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     const token = localStorage.getItem('token');

//     if (user && token) {
//       dispatch({ type: "LOGIN", payload: user, token });
//     }
//   }, []);

//   console.log("AuthContext state:", state);

//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// version 2--------------------
import React, { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
        token: action.token
      };
    case "LOGOUT":
      return {
        user: null,
        token: null
      };
    default:
      return state;
  }
};

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: null
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      try {
        const user = JSON.parse(storedUser);
        dispatch({ type: "LOGIN", payload: user, token: storedToken });
      } catch (error) {
        console.error('Error parsing user data:', error);
        // Handle the error gracefully, maybe log it or set default state
      }
    }
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
