import { Dispatch, SetStateAction } from "react";

import { Theme } from "@mui/material";

export interface ThemeContextInterface {
  setCurrentTheme: Dispatch<SetStateAction<Theme>>;
  currentTheme: Theme;
}
