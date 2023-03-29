import { useMediaQuery as MUIuseMediaQuery, useTheme } from "@mui/material";

import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { visuallyHidden as MUIVisuallyHidden } from "@mui/utils";
import { styled as MUIstyled } from "@mui/material/styles";

export * from "../themes";

//atoms//
export * from "./atom/typography";
export * from "./atom/box";
export * from "./atom/contentWrap";
export * from "./atom/button";
export * from "./atom/link";
export * from "./atom/alert";
export * from "./atom/toggleButton";
export * from "./atom/toggleGroup";
export * from "./atom/progressBar";
export * from "./atom/spinner";
export * from "./atom/badge";

//organisms//
export * from "./organism/navBar";
export * from "./organism/navDrawer";

export function useMediaQuery(args: any) {
	return MUIuseMediaQuery(args);
}

export const styled = MUIstyled;

export const visuallyHidden = MUIVisuallyHidden;

export { MUIThemeProvider, useTheme };
