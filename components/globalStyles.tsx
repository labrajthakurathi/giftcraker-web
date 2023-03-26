import { useContext, useEffect } from "react";
import { themeMap } from "@/ui-library";
import { ThemeContext } from "@/ui-library/themeContext/themeContext";

export const GlobalStyle = () => {
	const themeContext = useContext(ThemeContext);
	const currentTheme = themeContext.currentTheme;

	useEffect(() => {
		themeContext.setCurrentTheme(themeMap["Theme 1"]);
	}, []);

	return (
		<style
			jsx
			global
		>
			{`
				body {
					transition: all 300ms ease-in;
					background: ${currentTheme.palette.brand.blue.main};
				}
				* {
					transition: all 300ms ease-in;
					color: ${currentTheme.palette.text.primary};
				}
			`}
		</style>
	);
};
