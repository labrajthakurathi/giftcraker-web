import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { useRouter } from "next/router";
import { AUTH_ERROR_CODES } from "@/constants/firebaseErrors";
import { AlertColor } from "@mui/material";
import { User as FirebaseUser } from "firebase/auth";

export type Error = {
  severity: AlertColor;
  message: string;
};
export type UserData = {
  displayName?: string;
  photoURL?: string;
};

interface AuthContextTypes {
  loading: boolean;
  error: null | Error;
  user: FirebaseUser;
  logout: () => void;
  login: (e: any, userCred: any) => void;
  signUp: (e: any, userCred: any) => void;
  updateUserInfo: (userData: any, profileUrl: any) => void;
}

const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes);

export const useAuth = () => useContext(AuthContext);
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>("");
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<any>(null);
  const router = useRouter();

  //setting user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(true);
        setUser(user);

        user && setLoading(false);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  //login
  const login = (e: any, userCred: any) => {
    e.preventDefault();
    console.log(userCred);

    signInWithEmailAndPassword(auth, userCred?.email, userCred?.password)
      .then((userCredential) => {
        // Signed in
        router.push(`/me`);
      })
      .catch((error) => {
        setError({
          severity: "error",
          message: AUTH_ERROR_CODES[error.code] || error.code,
        });
        setTimeout(() => {
          setError(null);
        }, 15000);
      });
  };

  //sign up
  const signUp = (e: any, userCred: any) => {
    e.preventDefault();

    if (userCred.password !== userCred.re_password) {
      setError({ severity: "warning", message: "password didn't matched" });
      setTimeout(() => {
        setError(null);
      }, 15000);
    } else {
      createUserWithEmailAndPassword(auth, userCred.email, userCred.password)
        .then((userCredential) => {
          // Signed in
          sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            // ...
            router.push(`/me`);
          });
          // ...
        })
        .catch((error) => {
          setError({
            severity: "error",
            message: AUTH_ERROR_CODES[error.code] || error.code,
          });
          setTimeout(() => {
            setError(null);
          }, 15000);

          // ..
        });
    }
  };

  //update username
  const updateUserInfo = async (userData: any, profileUrl: any) => {
    updateProfile(auth.currentUser, {
      displayName: `${userData?.firstName} ${userData?.lastName}`,
      photoURL: profileUrl,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  //logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setError({
          severity: "error",
          message: AUTH_ERROR_CODES[error.code] || error.code,
        });
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, error, signUp, login, logout, updateUserInfo, loading }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
