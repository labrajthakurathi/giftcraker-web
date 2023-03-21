import { ThemeOptions, createTheme } from "@mui/material/styles";
import styled from "../css/Fonts.module.css";
import { DefaultTheme } from "./defaultTheme";

const primary = DefaultTheme.palette.common.white;
const main = DefaultTheme.palette.common.black;

const theme: ThemeOptions = {
  name: "Theme 1",
  palette: {
    mode: "dark",
    primary: {
      main: main,
    },
    text: {
      primary: primary,
    },
    secondary: {
      main: main,
    },
    divider: primary,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: primary,
        },
      },
    },
  },
};

export const Theme1 = createTheme(DefaultTheme, theme);
