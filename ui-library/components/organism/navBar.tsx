import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@/ui-library";
import { useMediaQuery } from "@mui/material";
import SwipeableTemporaryDrawer from "./navDrawer";
import { useAuth } from "@/context/authContext";

export const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme?.breakpoints.down("md"));
  const { user } = useAuth();

  return (
    <NavWrapper sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {isMobile && <SwipeableTemporaryDrawer variant="ham-burger" />}
          </IconButton>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/product-review-7f644.appspot.com/o/images%2Fapp%2Freviewrly-logo.png?alt=media&token=8d7b2ff8-2c89-427a-8ac7-9249ac227593"
              alt="helo"
              height="32px"
              width="auto"
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!isMobile && (
              <Box
                sx={{
                  minWidth: "480px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Button variant="text">Home</Button>
                <Button variant="text">About</Button>
                <Button variant="text">Blog</Button>
              </Box>
            )}
          </Box>

          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          {user && <SwipeableTemporaryDrawer variant="more" />}
        </Toolbar>
      </AppBar>
    </NavWrapper>
  );
};

const NavWrapper = styled(Box)(
  () => `
    padding:0;
    margin:0;
    width:100%;
    shadow:none;
    height:48px;

`
);
