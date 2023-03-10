import { useState, createContext, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedLisener,
} from "../utils/firebase/firebase.utils";
// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedLisener((user) => {
      setCurrentUser(user);
      if (user) createUserDocumentFromAuth(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
