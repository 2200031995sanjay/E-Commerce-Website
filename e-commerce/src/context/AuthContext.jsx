import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAdmin(currentUser?.email === "admin@gmail.com"); 
      setLoading(false); // Set loading to false once auth state is resolved
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, logout, loading }}>
      {!loading && children} {/* Prevent rendering until auth state is resolved */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
