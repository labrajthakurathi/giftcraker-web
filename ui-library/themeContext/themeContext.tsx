import { ThemeContextInterface } from "../interfaces/themeContextInterface";
import { createContext } from "react";

export const ThemeContext = createContext<ThemeContextInterface>(
  {} as ThemeContextInterface
);
