import React, { useState } from "react";

import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { Theme1 } from "../themes";
import { ThemeContext } from "../themeContext/themeContext";

export const ThemeProvider = ({ children }: any): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState(Theme1);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <MUIThemeProvider theme={currentTheme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
