import { useContext, useEffect } from "react";
import { themeMap } from "@/ui-library";
import { ThemeContext } from "@/ui-library/themeContext/themeContext";

export const GlobalStyle = () => {
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext.currentTheme;

  useEffect(() => {
    themeContext.setCurrentTheme(themeMap["Theme 2"]);
  }, []);

  return (
    <style jsx global>
      {`
        body {
          transition: all 300ms ease-in;
          background: ${currentTheme.palette.primary.main};
        }
        * {
          transition: all 300ms ease-in;
          color: ${currentTheme.palette.text.primary};
        }
      `}
    </style>
  );
};
