import {
  Box,
  Button,
  styled,
  TextField,
  Typography,
  NextLink,
  Alert,
} from "@/ui-library";
import { AlertColor, Grid } from "@mui/material";
import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useAuth } from "@/context/authContext";

export type Error = {
  severity: AlertColor;
  message: string;
};
const LoginForm = () => {
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const { login, error } = useAuth();

  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    setUserCred({ ...userCred, [e.target.name]: e.target.value });
  };

  return (
    <StyledForm onSubmit={(e) => login(e, userCred)}>
      <Grid container>
        <Box sx={{ margin: " 8px 8px" }}>
          <Typography variant="h5" mb={1}>
            {isPasswordReset ? "Reset Password" : "Login"}
          </Typography>
        </Box>

        {error && (
          <Grid xs={12}>
            <Box px={1} mb={1}>
              <Alert severity={error?.severity}>{error?.message}</Alert>
            </Box>
          </Grid>
        )}

        <Grid xs={12}>
          <Box m={1}>
            <TextField
              label="Email"
              value={userCred.email}
              name="email"
              onChange={handleChange}
              type="email"
              required
            />
          </Box>
        </Grid>
        {!isPasswordReset && (
          <Grid xs={12}>
            <Box m={1}>
              <TextField
                label="Password"
                type="password"
                value={userCred.password}
                name="password"
                onChange={handleChange}
                required
              />
            </Box>

            <NextLink
              sx={{ marginLeft: "8px" }}
              href="#"
              onClick={(e: any) => {
                e.preventDefault(), setIsPasswordReset(true);
              }}
            >
              Forgot Password?
            </NextLink>
          </Grid>
        )}

        <Grid xs={12}>
          <Box
            m={1}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              sx={{ width: "50%" }}
              endIcon={<NavigateNextIcon />}
              type="submit"
              disabled={userCred.email === "" || userCred.password === ""}
            >
              Submit
            </Button>
          </Box>
        </Grid>

        <Grid
          xs={12}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Box
            mr={1.5}
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <NextLink
              href={isPasswordReset ? "/login" : "/sign-up"}
              onClick={(e: any) => {
                if (isPasswordReset) {
                  e.preventDefault();
                  setIsPasswordReset(false);
                }
              }}
            >
              {isPasswordReset ? "Login instead?" : "Sign up instead?"}
            </NextLink>
          </Box>
        </Grid>
      </Grid>
    </StyledForm>
  );
};

export default LoginForm;

//prettier-ignore
const StyledForm = styled('form')(({ theme }) => `
   background:${theme.palette.background.paper};
   width:100%;
   max-width:500px;
   margin:auto;
   padding:2.5rem 2rem;
   border-radius:1rem;
   @media screen and (min-width: ${theme.breakpoints.values.md}px) { //screen size small desktop 905
    padding:2.5rem 4rem;
    }
  `);
