import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    //@ts-ignore
    if (user !== "") {
      if (!user) {
        router.push("/login");
      }
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
