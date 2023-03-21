import UnverifiedUser from "@/components/user/unverifiedUser";
import { useAuth } from "@/context/authContext";
import { Box } from "@/ui-library";
import React, { useState } from "react";
import CompleteYourProfile from "./completeProfile";
import VerifiedUser from "./verifiedUser";

const User = () => {
  const { user } = useAuth();
  const [isVerified, setIsVerified] = useState(user.emailVerified);
  const [isDisplayName, setIsDisplayName] = useState(user.displayName);

  return (
    <Box>
      {isVerified ? (
        isDisplayName ? (
          <VerifiedUser />
        ) : (
          <CompleteYourProfile setIsDisplayName={setIsDisplayName} />
        )
      ) : (
        <UnverifiedUser setIsVerified={setIsVerified} />
      )}
    </Box>
  );
};

export default User;
