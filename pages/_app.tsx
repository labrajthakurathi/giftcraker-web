import Page from "@/components/page";
import { GlobalContextProvider } from "@/context/globalContext";
import { ThemeProvider } from "@/ui-library/themeProvider/themeProvider";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<GlobalContextProvider>
			<ThemeProvider>
				<Page>
					<Component {...pageProps} />
				</Page>
			</ThemeProvider>
		</GlobalContextProvider>
	);
}
