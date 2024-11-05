import React, { useState, useEffect, useContext } from "react";
import { auth } from "../Config";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, SetCurrentUser] = useState(null);
  const [userLoggedIn, SetUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      SetCurrentUser({ ...user });
      SetUserLoggedIn(true);
    } else {
      SetCurrentUser(null);
      SetUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}