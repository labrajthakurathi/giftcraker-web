import { useAuth } from "@/context/authContext";
import { auth } from "@/firebase/clientApp";
import { Alert, Box, NextLink, styled } from "@/ui-library";
import React, { useEffect } from "react";

const UnverifiedUser = ({ setIsVerified }: any) => {
  const { user } = useAuth();

  useEffect(() => {
    const interval = setInterval(async () => {
      await user.reload();
      let jpt = await auth.currentUser;
      setIsVerified(jpt?.emailVerified);
      console.log(jpt);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        marginTop: "-48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledBox>
        <Alert severity="success">
          An Email with verification link has been sent to you
        </Alert>
        <NextLink href="mailto:#">Open Email</NextLink>
      </StyledBox>
    </Box>
  );
};

export default UnverifiedUser;

//prettier-ignore
const StyledBox =styled(Box)(({theme})=>   `
    height:200px;
    width:100%;
    max-width:500px;
    background:${theme.palette.brand.grey[100]};
    border-radius:16px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:.5rem;
`)
