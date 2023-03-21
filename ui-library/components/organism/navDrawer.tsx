import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, styled, useTheme } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "@/context/authContext";
import { Button } from "@/ui-library";

type Anchor = "left" | "right";

type Props = {
  variant: "ham-burger" | "more";
};
export default function SwipeableTemporaryDrawer(props: Props) {
  const { logout } = useAuth();
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const theme = useTheme();

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        background: `${theme.palette.primary.main}`,
        width: 250,
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box>
        <StyledCloseIcon />
        {props.variant === "ham-burger" ? (
          <MenuBox>
            <Button variant="text">Home</Button>
            <Button variant="text">About</Button>
            <Button variant="text">Blog</Button>
          </MenuBox>
        ) : (
          <MenuBox>
            <Button variant="text">Home</Button>
            <Button variant="text">About</Button>
            <Button variant="text" endIcon={<LogoutIcon />} onClick={logout}>
              Logout
            </Button>
          </MenuBox>
        )}
      </Box>
    </Box>
  );

  return (
    <div>
      {props.variant === "ham-burger" ? (
        <React.Fragment key={"left"}>
          <Box>
            <MenuIcon onClick={toggleDrawer("left", true)} />
          </Box>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
      ) : (
        <React.Fragment key={"right"}>
          <Box>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
              onClick={toggleDrawer("right", true)}
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
      )}
    </div>
  );
}

//prettier-ignore
const MenuBox = styled(Box)(({ theme }) => `
    margin-top:32px;
    display:flex;
    flex-direction:column;
    *{
        color:${theme.palette.text.primary}!important
    };
    `
);

//prettier-ignore
const StyledCloseIcon = styled(CloseIcon)(({ theme }) => `
    margin-left:1.3rem;
    margin-top:1rem;
    path{
     color:${theme.palette.text.primary} !important;
    }
    &:hover{
     cursor:pointer;
    }
`
);
